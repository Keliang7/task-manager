<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'
import { $u } from 'uview-pro'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'data',
  },
})

/**
 * 分享
 */
onShareAppMessage(() => {
  return {
    title: 'pages.tabs.data - 数据页',
    path: '/pages/tabs/data',
  }
})
</script>

<template>
  <view class="u-bg-#ededed">
    <view> data</view>
    <view @click="$u.route('/pages/admin/create')">
      goto admin create
    </view>
  </view>
</template>
