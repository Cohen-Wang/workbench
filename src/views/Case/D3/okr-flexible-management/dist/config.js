
// 节点距离
const DISTANCE = {
  task: 850,
  depart: 1000,
  image: 150
}

export default {

  // +-------------------------------------------------------------------------------------------
  // + 朴素白
  // +-------------------------------------------------------------------------------------------
  light: {
    // 任务
    TASK: {
      radius: 18,
      distance: DISTANCE.task,
      text: {
        color: '#333333',
        size: '14px',
        y: 5
      },
      opacity: {
        weakened: 0.6,
        normal: 1
      },
      isShowText: false,
      '挑战任务': {
        bgColor: '#eeeeee'
      },
      '专项任务': {
        bgColor: '#B7E8CD'
      },
      '部门任务': {
        bgColor: '#F1C1C7'
      }
    },
    // 部门
    DEPART: {
      radius: 30,
      distance: DISTANCE.depart,
      text: {
        color: '#333333',
        size: '14px',
        y: 5
      },
      opacity: {
        weakened: 0.2,
        normal: 1
      },
      isShowText: true,
      bgColor: '#FFF2B2'
    },
    // 人员
    image: {
      radius: 18,
      distance: DISTANCE.image,
      text: {
        color: '#333333',
        size: '12px',
        y: 30
      },
      opacity: {
        weakened: 0.1,
        normal: 1
      },
      isShowText: true,
      bgColor: '#eeeeee'
    },
    line: { // 连线
      lineWidth: 0.4, // 宽度
      text: {
        color: '#333333',
        size: '8px'
      },
      weakenColor: '#eeeeee', // 弱化的颜色
      normalColor: '#cccccc', // 普通颜色
      strengtheningColor: '#666666' // 强化颜色
    }
  },

  // +-------------------------------------------------------------------------------------------
  // + 天空蓝
  // +-------------------------------------------------------------------------------------------
  blue: {
    // 任务
    TASK: {
      radius: 18,
      distance: DISTANCE.task,
      text: {
        color: '#333333',
        size: '14px',
        y: 5
      },
      opacity: {
        weakened: 0.6,
        normal: 1
      },
      isShowText: false,
      '挑战任务': {
        bgColor: '#FFF2B2'
      },
      '专项任务': {
        bgColor: '#B7E8CD'
      },
      '部门任务': {
        bgColor: '#F1C1C7'
      }
    },
    // 部门
    DEPART: {
      radius: 30,
      distance: DISTANCE.depart,
      text: {
        color: '#333333',
        size: '14px',
        y: 5
      },
      opacity: {
        weakened: 0.2,
        normal: 1
      },
      isShowText: true,
      bgColor: '#FFF2B2'
    },
    // 人员
    image: {
      radius: 18,
      distance: DISTANCE.image,
      text: {
        color: '#333333',
        size: '12px',
        y: 30
      },
      opacity: {
        weakened: 0.1,
        normal: 1
      },
      isShowText: true,
      bgColor: '#FFF2B2'
    },
    line: { // 连线
      lineWidth: 0.4, // 宽度
      text: {
        color: '#333333',
        size: '8px'
      },
      textColor: '#333333', // 文字颜色
      weakenColor: '#eeeeee', // 弱化的颜色
      normalColor: '#cccccc', // 普通颜色
      strengtheningColor: '#666666' // 强化颜色
    }
  },

  // +-------------------------------------------------------------------------------------------
  // + 经典黑
  // +-------------------------------------------------------------------------------------------
  dark: {
    // 任务
    TASK: {
      radius: 18,
      distance: DISTANCE.task,
      text: {
        color: '#ffffff',
        size: '14px',
        y: 5
      },
      opacity: {
        weakened: 0.6,
        normal: 1
      },
      isShowText: false,
      '挑战任务': {
        bgColor: '#736313'
      },
      '专项任务': {
        bgColor: '#224839'
      },
      '部门任务': {
        bgColor: '#4C2830'
      }
    },
    // 部门
    DEPART: {
      radius: 30,
      distance: DISTANCE.depart,
      text: {
        color: '#ffffff',
        size: '14px',
        y: 5
      },
      opacity: {
        weakened: 0.2,
        normal: 1
      },
      isShowText: true,
      bgColor: '#736313'
    },
    // 人员
    image: {
      radius: 18,
      distance: DISTANCE.image,
      text: {
        color: '#ffffff',
        size: '12px',
        y: 30
      },
      opacity: {
        weakened: 0.1,
        normal: 1
      },
      isShowText: true,
      bgColor: '#736313'
    },
    line: { // 连线
      lineWidth: 0.4, // 宽度
      text: {
        color: '#ffffff',
        size: '8px'
      },
      textColor: '#c9ecff', // 文字颜色
      weakenColor: '#0a1d38', // 弱化的颜色
      normalColor: '#0a1d38', // 普通颜色
      strengtheningColor: '#c9ecff' // 强化颜色
    }
  }
}
