import httpInstance from '@/utils/http'

/**
 * 轮播图
 * @returns {*}
 */
export function getBannerAPI(params = {}) {
  // 解构赋值，默认为1（首页） 一级分类页面为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * 新鲜好物
 */
export function findNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * 人气推荐
 */
export function getHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

/**
 * 商品
 */
export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}
