<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'employee',
  },
})
/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.tabs.employee - 员工页',
    path: '/pages/tabs/employee',
  }
})
</script>

<template>
  <view class="u-bg-#ededed">
    employee
  </view>
</template>
