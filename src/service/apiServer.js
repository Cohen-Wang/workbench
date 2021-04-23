import axiosInterceptor from '@/service/axiosInterceptor'

/**
 * GET
 * @param url
 * @param param
 * @returns {*}
 */
export const getAction = function(url = '', param = {}) {
  return axiosInterceptor.get(url, param)
}

/**
 * POST
 * @param url
 * @param data
 * @param config
 * @returns {*}
 */
export const postAction = function(url = '', data = {}, config = {}) {
  return axiosInterceptor.post(url, data, config)
}

/**
 * PUT
 * @param url
 * @param data
 * @param config
 * @returns {*}
 */
export const putAction = function(url = '', data = {}, config = {}) {
  return axiosInterceptor.put(url, data, config)
}

/**
 * DELETE
 * @param url
 * @param data
 * @param config
 * @returns {*}
 */
export const deleteAction = function(url = '', data = {}, config = {}) {
  return axiosInterceptor.delete(url, data, config)
}
