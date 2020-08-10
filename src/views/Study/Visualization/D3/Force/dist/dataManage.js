const dataManage = {
  // 将edges的source为id转为index
  optimizeSource(edges, nodes) {
    const result = JSON.parse(JSON.stringify(edges))
    result.forEach(item => {
      item['source'] = nodes.findIndex(node => node.id === item.source) // 将id 变为index
    })
    return result
  },

  // 将edges的source为id转为index
  optimizeTarget(edges, nodes) {
    const result = JSON.parse(JSON.stringify(edges))
    result.forEach(item => {
      item['target'] = nodes.findIndex(node => node.id === item.target) // 将id 变为index
    })
    return result
  }

  // 过滤节点【人员】或【任务】或【部门】
  // filterType(nodes, type) {
  //   return nodes.filter(item => item.type === type)
  // }
}

export default dataManage
