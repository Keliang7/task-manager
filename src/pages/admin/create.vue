<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'create',
  },
})

/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.admin.create - 创建页',
    path: '/pages/admin/create',
  }
})
</script>

<template>
  <view class="u-bg-#ededed">
    create
  </view>
</template>
