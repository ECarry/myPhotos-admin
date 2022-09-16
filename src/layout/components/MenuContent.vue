<script setup lang="ts">
const menus = [
  {
    typeTitle: '',
    menu: [
      {
        title: 'Dashboards',
        icon: 'ri-dashboard-2-line',
        name: 'Dashboard',
      },
    ],
  },
  {
    typeTitle: 'PHOTO MANAGE',
    menu: [
      {
        title: 'All Photots',
        icon: 'ri-camera-line',
        name: 'Photos',
      },
      {
        title: 'My Fav',
        icon: 'ri-heart-line',
        name: 'Fav',
      },
      {
        title: 'Upload Photo',
        icon: 'ri-gallery-upload-line',
        name: 'Upload',
      },
    ],
  },
  {
    typeTitle: 'FOOTMARK',
    menu: [
      {
        title: 'Photo Map',
        icon: 'ri-map-pin-2-line',
        name: 'Map',
      },
    ],
  },
]
</script>

<template>
  <div class="menu-content">
    <div class="menu-list">
      <template v-for="(item) in menus" :key="item.typeTitle">
        <div v-if="item.typeTitle" class="menu-type">
          <span class="type-title">
            <span>{{ item.typeTitle }}</span>
          </span>
          <span class="show-icon"><i class="ri-subtract-line"></i></span>
        </div>
        <div v-for="(menu) in item.menu" :key="menu.title" class="menu-item">
          <div class="menu-icon">
            <i :class="menu.icon"></i>
          </div>
          <div class="menu-title">
            {{ menu.title }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-content {
  .menu-list{
    color: #ffffffC2;
    .menu-type {
      margin-top: 18px;
      position: relative;
      height: 48px;

      padding: 0 18px 0 22px;

      display: flex;
      align-items: center;

      .type-title {
        position: absolute;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(94, 86, 105, .14);
        line-height: .1em;

        span {
          font-size: .75rem;
          font-weight: 400;
          padding: 0 10px;
          margin-left: 16px;
          background: #1f1d31;
        }
      }
      .show-icon {
        display: none;
        font-size: 24px;
      }
    }
    .menu-item {
      display: flex;
      align-items: center;
      height: 44px;
      padding: 0 18px 0 22px;
      cursor: pointer;
      margin-top: 6px;
      overflow: hidden;

      //background-image: linear-gradient(98deg, #c48eff 0%, #9155fd 94%);
      border-bottom-right-radius: 22px;
      border-top-right-radius: 22px;
      .menu-icon {
        font-size: 24px;
        margin-right: 12px;
      }
      .menu-title {
        display: inline-block;
        line-height: 44px;
      }
    }
    .menu-item.active{
      background-image: linear-gradient(98deg, #c48eff 0%, #9155fd 94%);
      color: #ffffffDE;
    }
  }
}
</style>
