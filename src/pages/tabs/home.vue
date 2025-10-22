<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'home',
  },
})
/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.tabs.home - 首页',
    path: '/pages/tabs/home',
  }
})
</script>

<template>
  <view class="u-bg-#ededed">
    home
  </view>
</template>
