<script setup>
import SideNav from './components/SideNav.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="layout-sidenav">
    <SideNav />
  </div>
  <div class="layout-content">
    <Header />
  </div>
</template>

<style lang="scss" scoped>
.layout-sidenav {
  position: absolute;
  top: 0;
  left: 0;
}

.layout-content {
  width: calc(100% - 260px);
  min-height: 100vh;
  padding: 0 0 0 260px;
}
</style>
