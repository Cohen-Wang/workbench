// +-----------------------------------------------------------------------------------------------------
// | 表单方法
// +-----------------------------------------------------------------------------------------------------
/**
 * 判断输入内容是否为电话号码
 * @param rule
 * @param value
 * @param callback
 */
export const isPhoneLegal = (rule, value, callback) => {
  const reg = /^1[3-5|7-9][0-9]\d{8}$/
  const isPhone = reg.test(value)
  value = Number(value) // 转换为数字
  if (typeof value === 'number' && !isNaN(value)) { // 判断是否为数字
    value = value.toString() // 转换成字符串
    if (value.length < 0 || value.length > 12 || !isPhone) { // 判断是否为11位手机号
      callback(new Error('请输入正确的手机号码'))
    } else {
      callback()
    }
  }
}

/**
 * 检查form表单email字段
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
export const isEmailLegal = (rule, value, callback) => {
  const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  // 如果没有内容，继续执行
  if (!value) return callback()
  // if (!value) return callback(new Error('邮箱不能为空'))
  // 如果有内容，就判断是否正确
  if (mailReg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的邮箱格式'))
  }
}