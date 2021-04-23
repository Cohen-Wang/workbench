// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

const login = {
  login: (params) => {
    const url = `http://192.168.0.151:8887/role/rolelist`
    getAction(url, params)
  }
}

export default login
