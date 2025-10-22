<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'msg',
  },
})
/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.tabs.msg - 消息页',
    path: '/pages/tabs/msg',
  }
})
</script>

<template>
  <view class="u-bg-#ededed">
    msg
  </view>
</template>
