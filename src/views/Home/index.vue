<script setup>
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import HomePanel from '@/views/Home/components/HomePanel.vue'
</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!--  测试面板组件-->
  <HomePanel title="title" su-title="suTitle">
    <div>测试面板组件 具名插槽</div>
  </HomePanel>
</template>
<style scoped></style>
