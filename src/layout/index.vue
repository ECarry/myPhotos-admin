<script setup>
import SideNav from './components/SideNav.vue'
</script>

<template>
  <div class="layout-sidenav">
    <SideNav />
  </div>
</template>

<style lang="scss" scoped>
.layout-sidenav {
  position: absolute;
  top: 0;
  left: 0;

  width: 260px;
  height: 100vh;

  background: #1f1d31;
}
</style>
