<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'submit',
  },
})

/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.user.submit - 创建页',
    path: '/pages/user/submit',
  }
})
</script>

<template>
  <view class="u-bg-#ededed">
    submit
  </view>
</template>
