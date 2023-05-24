<script setup></script>

<template>
  <div>
    我是首页
    <div class="testScss">test scss</div>
    <!--  二级路由出口组件-->
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.testScss {
  color: $xtxColor;
}
</style>
