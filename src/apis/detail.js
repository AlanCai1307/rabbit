import request from '@/utils/http'

/**
 * 商品详情页
 */

export const getDetailAPI = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}
