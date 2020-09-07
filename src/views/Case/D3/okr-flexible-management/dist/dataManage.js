import { intersection, intersectionBy, uniq } from 'lodash'

// 将edges的source为id转为index
export function optimizeSource(edges, nodes) {
  const result = JSON.parse(JSON.stringify(edges))
  result.forEach(item => {
    item['source'] = nodes.findIndex(node => node.id === item.source) // 将id 变为index
  })
  return result
}

// 将edges的source为id转为index
export function optimizeTarget(edges, nodes) {
  const result = JSON.parse(JSON.stringify(edges))
  result.forEach(item => {
    item['target'] = nodes.findIndex(node => node.id === item.target) // 将id 变为index
  })
  return result
}

// +--------------------------------------------------------------------------------------------------------------------
// | 相对关系
// +--------------------------------------------------------------------------------------------------------------------
/**
 * 已知【连线集合】【节点】，求得所有和此节点有关的【连线集合】
 * @param edgeList
 * @param node
 * @returns {*}
 */
const getAllEdgesRelatedToNode = (edgeList, node) => {
  return edgeList.filter(e => e.source.id === node.id || e.target.id === node.id)
}

/**
 * 已知【节点相关的所有连线】【节点】，求得所有和此节点有关的【节点集合】
 * @param edgesRelatedToNode
 * @param node
 * @returns {Array}
 */
const getAllNodeIdsRelatedToNode = (edgesRelatedToNode, node) => {
  const result = []
  edgesRelatedToNode.forEach(e => {
    if (node.id !== e.source.id) return result.push(e.source.id)
    if (node.id !== e.target.id) return result.push(e.target.id)
  })
  return result
}

/**
 * 已知【节点相关的所有连线】【2个节点相关的所有节点id】【节点】，求得【相关联的节点和此节点的连线集合】
 * @param edgesRelatedToNode
 * @param intersectionNodeIds
 * @param node
 * @returns {*}
 */
const getTheEdgeBetweenNodeAndMiddle = (edgesRelatedToNode, intersectionNodeIds, node) => {
  return edgesRelatedToNode.filter(e => {
    const isTargetNode = intersectionNodeIds.includes(e.source.id) && node.id === e.target.id // boolean
    const isSourceNode = intersectionNodeIds.includes(e.target.id) && node.id === e.source.id // boolean
    return isTargetNode || isSourceNode
  })
}

// +--------------------------------------------------------------------------------------------------------------------
// | 对象探索
// +--------------------------------------------------------------------------------------------------------------------
export function getRelativeObject() {
  return {
    nodes: [],
    edges: []
  }
}

// +--------------------------------------------------------------------------------------------------------------------
// | 相对关系
// +--------------------------------------------------------------------------------------------------------------------
/**
 * 获取相对关系的节点和连线数据
 * 当选择人员后（有了节点id）
 *    求出所有节点和连线: getResult()
 *        根据节点id，求出节点；
 *        根据节点，求出连线；
 *        根据连线，求出可能存在的中间节点
 *    画图: draw()
 */
export function getRelativeData(allEdges, allNodes, node_1, node_2) {
  // 变量
  let intersectionNodes = [] // 相交的节点对象
  let nodes = []
  let edges = []
  // 逻辑
  const edgesRelatedToNodeOne = getAllEdgesRelatedToNode(allEdges, node_1) // 求出节点1相关连线
  const edgesRelatedToNodeTwo = getAllEdgesRelatedToNode(allEdges, node_2) // 求出节点2相关连线
  // ...
  const intersectionEdges = intersectionBy(edgesRelatedToNodeOne, edgesRelatedToNodeTwo, 'id') // 【线】根据id，求出交集
  // 求出交集的节点id
  const nodeIdRelatedToNodeOne = uniq(getAllNodeIdsRelatedToNode(edgesRelatedToNodeOne, node_1)) // 所有相关连线的另一个节点
  const nodeIdRelatedToNodeTwo = uniq(getAllNodeIdsRelatedToNode(edgesRelatedToNodeTwo, node_2)) // 所有相关连线的另一个节点
  const intersectionNodeIds = intersection(nodeIdRelatedToNodeOne, nodeIdRelatedToNodeTwo)
  // 如果有中间节点
  if (intersectionNodeIds.length) {
    // 求出相关节点的对象
    intersectionNodes = allNodes.filter(e => intersectionNodeIds.includes(e.id))
    const edges1List = getTheEdgeBetweenNodeAndMiddle(edgesRelatedToNodeOne, intersectionNodeIds, node_1) // 和节点1相关的所有连线
    const edges2List = getTheEdgeBetweenNodeAndMiddle(edgesRelatedToNodeTwo, intersectionNodeIds, node_2) // 和节点2相关的所有连线
    edges = [...intersectionEdges, ...edges1List, ...edges2List]
  }
  nodes = [...intersectionNodes, node_1, node_2]
  // 返回
  return {
    nodes,
    edges
  }
}
