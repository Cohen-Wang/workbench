/**
 * sessionStorage
 */
export const session = {
  // 存储
  set: params => {
    const { name, content, type } = params
    const obj = {
      dataType: typeof (content),
      content: content,
      type: type,
      datetime: new Date().getTime()
    }
    // 直接放到sessionStorage
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  },
  // 获取
  get: params => {
    const { name } = params
    let obj = {}
    let content
    obj = window.sessionStorage.getItem(name)
    if (!obj) return
    obj = JSON.parse(obj)
    if (obj.dataType === 'string') {
      content = obj.content
    } else if (obj.dataType === 'number') {
      content = Number(obj.content)
    } else if (obj.dataType === 'object') {
      content = obj.content
    }
    return content
  },
  // 删除
  remove: name => {
    window.sessionStorage.removeItem(name)
  }
}

/**
 * 本地存储
 */
export const local = {
  // 存储
  set: params => {
    const { name, content, type } = params
    const obj = {
      dataType: typeof (content),
      content: content,
      type: type,
      datetime: new Date().getTime()
    }
    // localStorage
    window.localStorage.setItem(name, JSON.stringify(obj))
  },
  // 获取
  get: params => {
    const { name } = params
    let obj = {}
    let content
    obj = window.localStorage.getItem(name)
    if (!obj) return
    obj = JSON.parse(obj)
    if (obj.dataType === 'string') {
      content = obj.content
    } else if (obj.dataType === 'number') {
      content = Number(obj.content)
    } else if (obj.dataType === 'object') {
      content = obj.content
    }
    return content
  },
  // 删除
  remove: name => {
    window.localStorage.removeItem(name)
  }
}
