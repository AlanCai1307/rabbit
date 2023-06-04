import request from '@/utils/http'

/**
 * 登录接口
 */
export const loginAPI = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}
