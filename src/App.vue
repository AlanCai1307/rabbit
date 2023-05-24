<template>
  <el-button type="primary">i am button</el-button>
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
