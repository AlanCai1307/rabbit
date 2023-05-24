<template>
  <!--  一级路由出口组件-->
  <router-view />
</template>
<script setup>
import { onMounted } from 'vue'
import { getCategory } from './apis/testAPI'

onMounted(() => {
  getCategory().then((res) => {
    console.log('testAPI', res)
  })
})
</script>
