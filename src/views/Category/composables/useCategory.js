/*封装分类业务代码*/
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { getTopCategoryAPI } from '@/apis/category'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id) => {
    getTopCategoryAPI(id).then((res) => {
      categoryData.value = res.result
      console.log('categoryData', categoryData.value)
    })
  }
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })
  onMounted(() => getCategory(route.params.id))
  return { categoryData }
}
