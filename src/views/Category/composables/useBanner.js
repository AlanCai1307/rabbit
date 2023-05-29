/*封装分类轮播图代码*/
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI()
    bannerList.value = res.result
  }
  onMounted(() => {
    getBanner('2')
  })
  return { bannerList }
  /* return { bannerList } 使用对象字面量语法创建了一个对象，
  该对象只有一个属性 categoryData，
  它的值是当前作用域中的变量 categoryData。*/
}
