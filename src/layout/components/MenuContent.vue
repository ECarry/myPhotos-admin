<script setup>

</script>

<template>
  <div class="menu-content">
    <div class="menu-list">
      <div class="menu-item">
        <div class="menu-icon"><svg width="24" height="24" viewBox="0 0 16 16"><path fill="#ffffff" fill-rule="evenodd" d="m8.36 1.37l6.36 5.8l-.71.71L13 6.964v6.526l-.5.5h-3l-.5-.5v-3.5H7v3.5l-.5.5h-3l-.5-.5V6.972L2 7.88l-.71-.71l6.35-5.8h.72zM4 6.063v6.927h2v-3.5l.5-.5h3l.5.5v3.5h2V6.057L8 2.43L4 6.063z" clip-rule="evenodd"/></svg></div>
        <div class="menu-title">Dashboards</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-content {
  .menu-list{
    .menu-item {
      display: flex;
      align-items: center;
      height: 44px;
      color: #ffffffc2;
      padding: 0 18px 0 22px;
      cursor: pointer;

      background-image: linear-gradient(98deg, #c48eff 0%, #9155fd 94%);
      border-bottom-right-radius: 22px;
      border-top-right-radius: 22px;
      .menu-icon {
        margin-right: 12px;
      }
      .menu-title {
        line-height: 44px;
      }
    }
  }
}
</style>
