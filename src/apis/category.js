import request from '@/utils/http' //只有一个默认导出时可以自定义导入变量名

/**
 * @description: 获取分类数据
 * @param id
 * @returns {*}
 */
export const getTopCategoryAPI = (id) => {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}
export const getCategoryFilterAPI = (id) => {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
