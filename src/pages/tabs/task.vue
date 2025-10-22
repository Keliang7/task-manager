<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'Home',
  },
  type: 'home',
})

/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.tabs.task - 任务页',
    path: '/pages/tabs/task',
  }
})
</script>

<template>
  <view>
    <view class="flex justify-center items-center bg-#ededed">
      <view class="text-24px text-yellow">
        123456
      </view>
      <u-gap height="70" />
    </view>
  </view>
</template>
