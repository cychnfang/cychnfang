<template>
  <div :class="['page', { 'home-page': isHomePage }]">
    <div class="page-header">
      <div class="header-left">
        <div class="avator">
          <img src="@/assets/zaizai.jpg" alt="" />
        </div>
      </div>
      <div class="header-center"></div>
      <div class="header-right"></div>
    </div>
    <div class="page-sider" v-if="isHomePage"></div>
    <div class="page-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

let isHomePage = $ref(false)
watchEffect(() => {
  isHomePage = route.name == 'Home'
})
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    'header header'
    'sider content';

  &.home-page {
    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'content';
  }
  .page-header {
    grid-area: header;
    border-bottom: 1px solid #eaecef;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);

    .header-left {
      padding: 0 20px;
      .avator {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        display: grid;
        place-items: center;
      }
    }
  }
  .page-sider {
    grid-area: sider;
    border-bottom: 1px solid #eaecef;
    &.hide {
      display: none;
    }
  }
  .page-content {
    grid-area: content;
  }
}
</style>
