<script setup lang="ts">
import MenuContent from './MenuContent.vue'
import { useSettingsStore } from '~/stores'

const store = useSettingsStore()
</script>

<template>
  <div class="sidebar" :class="{ active: store.$state.showSideNav }">
    <div class="logo-wrap">
      <a href="#">
        <img src="../../assets/images/logo512.png" alt="">
        <h2>ECARRY</h2>
      </a>
      <div class="sidenav-btn" @click="store.$state.showSideNav = !store.$state.showSideNav">
        <svg v-if="store.$state.showSideNav" width="20" height="20" viewBox="0 0 24 24"><g fill="#ffffffC2"><path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" /><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" clip-rule="evenodd" /></g></svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffffC2" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" clip-rule="evenodd" /></svg>
      </div>
    </div>
    <div class="menu-wrap">
      <MenuContent />
    </div>
  </div>
</template>

<style lang="scss">
// 折叠状态栏
.sidebar {
  width: 68px;
  height: 100vh;
  background: #1f1d31;

  // 折叠动画
  transition-duration: 4s;
  transition-timing-function: cubic-bezier(.25, .8, .25, 1);

  // hover 展开状态栏
  &:hover {
    width: 260px;

    // LOGO
    .logo-wrap {
      padding: 20px 20px 8px 24px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;
        img {
          width: 30px;
          //object-fit: cover;
          margin-right: 12px;
        }
        h2 {
          display: block;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: .3px;
          color: #fff;
        }
      }
      svg {
        display: block;
        cursor: pointer;
      }
    }

    // 菜单样式
    .menu-wrap {
      padding: 8px 20px 8px 0;
      .menu-content{
        .menu-list {
          .menu-type {
            .type-title {
              display: block;
            }
            .show-icon {
              display: none;
            }
          }
          .menu-item {
            .menu-title {
              display: block;
            }
        }
        }
      }
    }
  }

  // LOGO
  .logo-wrap {
    padding: 20px 20px 8px 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      img {
        width: 30px;
        //object-fit: cover;
        //margin-right: 12px;
      }
      h2 {
        display: none;
      }
    }
    svg {
      display: none;
    }
  }

  // 菜单样式
  .menu-wrap {
    padding: 8px 8px 8px 0;
    .menu-content{
      .menu-list {
        .menu-type {
          .type-title {
            display: none;
          }
          .show-icon {
            display: block;
          }
        }
        .menu-item {
          .menu-title {
            display: none;
          }
        }
      }
    }
  }
}

// 展开状态栏
.sidebar.active {
  width: 260px;

  // LOGO
  .logo-wrap {
    padding: 20px 20px 8px 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      img {
        width: 30px;
        object-fit: cover;
        margin-right: 12px;
      }
      h2 {
        display: block;
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: .3px;
        color: #fff;
      }
    }
    svg {
      display: block;
      cursor: pointer;
    }
  }

  // 菜单样式
  .menu-wrap {
    padding: 8px 20px 8px 0;
    .menu-content{
      .menu-list {
        .menu-type {
          .type-title {
            display: block;
          }
          .show-icon {
            display: none;
          }
        }
        .menu-item {
          .menu-title {
            display: block;
          }
        }
      }
    }
  }
}
</style>
