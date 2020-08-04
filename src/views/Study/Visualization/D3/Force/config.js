export default {
  // 任务
  TASK: {
    radius: 18,
    distance: 850,
    fontSize: '14px',
    fontY: 5,
    opacity: {
      weakened: 0.6,
      normal: 1
    },
    isShowText: false,
    '挑战任务': {
      light: {
        bgColor: '#eeeeee'
      },
      blue: {
        bgColor: '#FFF2B2'
      },
      dark: {
        bgColor: '#736313'
      }
    },
    '专项任务': {
      light: {
        bgColor: '#B7E8CD'
      },
      blue: {
        bgColor: '#B7E8CD'
      },
      dark: {
        bgColor: '#224839'
      }
    },
    '部门任务': {
      light: {
        bgColor: '#F1C1C7'
      },
      blue: {
        bgColor: '#F1C1C7'
      },
      dark: {
        bgColor: '#4C2830'
      }
    }
  },
  // 部门
  DEPART: {
    radius: 30,
    distance: 1000,
    fontSize: '16px',
    fontY: 5,
    opacity: {
      weakened: 0.2,
      normal: 1
    },
    isShowText: true,
    light: {
      bgColor: '#FFF2B2'
    },
    blue: {
      bgColor: '#FFF2B2'
    },
    dark: {
      bgColor: '#736313'
    }
  },
  // 人员
  image: {
    radius: 18,
    distance: 150,
    fontSize: '10px',
    fontY: 30,
    opacity: {
      weakened: 0.1,
      normal: 1
    },
    isShowText: true,
    light: {
      bgColor: '#eeeeee'
    },
    blue: {
      bgColor: '#FFF2B2'
    },
    dark: {
      bgColor: '#736313'
    }
  },
  line: { // 连线
    lineWidth: 0.4, // 宽度
    fontSize: '8px',
    light: {
      textColor: '#333333', // 文字颜色
      weakenColor: '#eeeeee', // 弱化的颜色
      normalColor: '#cccccc', // 普通颜色
      strengtheningColor: '#666666' // 强化颜色
    },
    blue: {
      textColor: '#333333', // 文字颜色
      weakenColor: '#eeeeee', // 弱化的颜色
      normalColor: '#cccccc', // 普通颜色
      strengtheningColor: '#666666' // 强化颜色
    },
    dark: {
      textColor: '#c9ecff', // 文字颜色
      weakenColor: '#0a1d38', // 弱化的颜色
      normalColor: '#0a1d38', // 普通颜色
      strengtheningColor: '#c9ecff' // 强化颜色
    }
  },
  text: {
    light: {
      color: '#333333'
    },
    blue: {
      color: '#333333'
    },
    dark: {
      color: '#ffffff'
    }
  }
}
