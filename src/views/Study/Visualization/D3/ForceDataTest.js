export default {
  nodes: [
    {
      abbreviation: '',
      creatUser: '',
      createTime: null,
      depart: '重樱',
      describes: '',
      headPortrait: './1.jpg',
      id: '1230731754925142018',
      initScore: 0.01,
      name: '长门',
      okrScore: 0,
      position: '',
      taskType: '',
      type: 'image',
      size: 60,
      style: {
        highlightNode: {
          opacity: 1,
          'text-shape': {
            opacity: 1
          }
        },
        weakenNode: {
          opacity: 0.2,
          'text-shape': {
            opacity: 0.2
          }
        }
      },
      img: './1.jpg',
      label: '长门',
      clipCfg: {
        show: true,
        type: 'circle',
        r: 30,
        style: {
          stroke: '#eaff8f',
          shadowColor: '#000',
          shadowBlur: 10,
          lineWidth: 2
        }
      },
      color: '#5B8FF9',
      labelCfg: {
        style: {
          fill: '#01172E'
        }
      },
      x: 746.7711445762889,
      y: 750.3455524021165
    },
    {
      abbreviation: '',
      creatUser: '',
      createTime: null,
      depart: '',
      describes: '123',
      headPortrait: '',
      id: '1230731753675239426',
      initScore: 0,
      name: '重樱',
      okrScore: 5.846,
      position: '',
      taskType: '',
      type: 'DEPART',
      size: 60,
      style: {
        highlightNode: {
          opacity: 1,
          'text-shape': {
            opacity: 1
          }
        },
        weakenNode: {
          opacity: 0.2,
          'text-shape': {
            opacity: 0.2
          }
        },
        fill: '#29A8FF',
        lineWidth: 0
      },
      label: '重樱',
      color: '#5B8FF9',
      labelCfg: {
        style: {
          fill: '#01172E'
        }
      },
      x: 595.6746837566483,
      y: 873.8864188722911
    },
    {
      abbreviation: '',
      creatUser: '',
      createTime: null,
      depart: '北方联合',
      describes: '',
      headPortrait: './1.jpg',
      id: '1242374279628759041',
      initScore: 0,
      name: '塔什干',
      okrScore: 6.174,
      position: '',
      taskType: '',
      type: 'image',
      size: 40,
      style: {
        highlightNode: {
          opacity: 1,
          'text-shape': {
            opacity: 1
          }
        },
        weakenNode: {
          opacity: 0.2,
          'text-shape': {
            opacity: 0.2
          }
        }
      },
      img: './1.jpg',
      label: '塔什干',
      clipCfg: {
        show: true,
        type: 'circle',
        r: 20,
        style: {
          stroke: '#eaff8f',
          shadowColor: '#000',
          shadowBlur: 10,
          lineWidth: 2
        }
      },
      color: '#5B8FF9',
      labelCfg: {
        style: {
          fill: '#01172E'
        }
      },
      x: 672.8750596741418,
      y: 439.26049130666945
    },
    {
      abbreviation: '苏联',
      creatUser: '',
      createTime: null,
      depart: '',
      describes:
          '北方联合北方联合北方联合北方联合北方联合北方联合北方联合北方联合北方联合北方联合北方联合北方联合',
      headPortrait: '',
      id: '1232209221502337026',
      initScore: 0,
      name: '北方联合',
      okrScore: 6.174,
      position: '',
      taskType: '',
      type: 'DEPART',
      size: 60,
      style: {
        highlightNode: {
          opacity: 1,
          'text-shape': {
            opacity: 1
          }
        },
        weakenNode: {
          opacity: 0.2,
          'text-shape': {
            opacity: 0.2
          }
        },
        fill: '#29A8FF',
        lineWidth: 0
      },
      label: '苏联',
      color: '#5B8FF9',
      labelCfg: {
        style: {
          fill: '#01172E'
        }
      },
      x: 863.9982112946635,
      y: 827.6366627494808
    }
  ],
  edges: [
    {
      relationship: 'DEPTHEADS',
      relationshipAbbreviation: '部门领导',
      relationshipDes: '部门领导',
      source: '1230731754925142018',
      target: '1230731753675239426',
      twoWay: false,
      id: 'edge|0',
      curveOffset: 30,
      style: {
        highlightEdgeDark: {
          stroke: '#ffffff'
        },
        weakenEdgeDark: {
          stroke: '#071631'
        },
        weakenEdgeLight: {
          stroke: '#f5f5f5'
        },
        stroke: '#e2e2e2',
        lineWidth: 1,
        lineAppendWidth: 2,
        endArrow: {
          path: 'M 0,0 L 4,1 L 4,-1 Z',
          fill: '#e2e2e2'
        },
        startArrow: false
      },
      type: 'quadratic',
      labelCfg: {
        autoRotate: true,
        style: {
          fill: '#01172E'
        }
      },
      startPoint: {
        x: 340.6574101648552,
        y: 387.9673526796349
      },
      endPoint: {
        x: 313.013142684347,
        y: 408.6246186126753
      },
      curvePosition: 0.5
    },
    {
      relationship: 'DEPTHEADS',
      relationshipAbbreviation: '部门领导',
      relationshipDes: '部门领导',
      source: '1242374279628759041',
      target: '1232209221502337026',
      twoWay: false,
      id: 'edge|1',
      curveOffset: 30,
      style: {
        highlightEdgeDark: {
          stroke: '#ffffff'
        },
        weakenEdgeDark: {
          stroke: '#071631'
        },
        weakenEdgeLight: {
          stroke: '#f5f5f5'
        },
        stroke: '#e2e2e2',
        lineWidth: 1,
        lineAppendWidth: 2,
        endArrow: {
          path: 'M 0,0 L 4,1 L 4,-1 Z',
          fill: '#e2e2e2'
        },
        startArrow: false
      },
      type: 'quadratic',
      labelCfg: {
        autoRotate: true,
        style: {
          fill: '#01172E'
        }
      },
      startPoint: {
        x: 336.1699426989996,
        y: 229.55800258483777
      },
      endPoint: {
        x: 404.3019323331614,
        y: 365.89557432440176
      },
      curvePosition: 0.5
    }
  ]
}
