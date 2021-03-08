// +-----------------------------------------------------------------------------------------------------
// | 表单方法
// +-----------------------------------------------------------------------------------------------------

/**
 * 判断字符串是否为强密码
 * @param rule
 * @param value
 * @param callback
 */
export const isPasswordStrong = (rule, value, callback) => {
  // 如果没有内容，继续执行
  if (!value) return callback()
  const debug = 2
  if (debug === 1) {
    // 如果有内容，则判断
    const reg = /^(?=.*[a-zA-Z])(?=.*\d).{8,20}$/
    const isPasswordStrong = reg.test(value)
    // 逻辑
    if (!isPasswordStrong) return callback(new Error('密码弱，请设置8-20位字母加数字密码！'))
    callback()
  }
  if (debug === 2) {
    // 如果有内容，则判断
    const reg = /^.*(?=.{8,20})(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?\(\)]).*$/
    const isPasswordStrong = reg.test(value)
    // 逻辑
    if (!isPasswordStrong) return callback(new Error('密码最短8位，必须包含数字，小写字母，大写字母和特殊字符'))
    callback()
  }
}

/**
 * 判断字符串是否为合法的电话号码
 * @param rule
 * @param value
 * @param callback
 */
export const isPhoneLegal = (rule, value, callback) => {
  // 如果没有内容，继续执行
  if (!value) return callback()
  // 如果有内容，则判断
  const reg = /^1[3-5|7-9][0-9]\d{8}$/
  const isPhoneLegal = reg.test(value)
  // 逻辑
  if (!isPhoneLegal) return callback(new Error('请输入正确的手机号码'))
  callback()
}

/**
 * 判断字符串是否为合法的邮箱
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
export const isEmailLegal = (rule, value, callback) => {
  // 如果没有内容，继续执行
  if (!value) return callback()
  // 如果有内容，则判断
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  const isEmailLegal = reg.test(value)
  // 逻辑
  // 如果有内容，就判断是否正确
  if (!isEmailLegal) return callback(new Error('请输入正确的邮箱格式'))
  callback()
}
