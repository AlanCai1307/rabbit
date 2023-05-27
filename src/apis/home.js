import httpInstance from '@/utils/http'

/**
 * 轮播图
 * @returns {*}
 */
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
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
