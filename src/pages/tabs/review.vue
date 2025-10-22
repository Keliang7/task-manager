<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'review',
  },
})
/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.tabs.review - 审核页',
    path: '/pages/tabs/review',
  }
})
</script>

<template>
  <view class="u-bg-#ededed">
    review
  </view>
</template>
