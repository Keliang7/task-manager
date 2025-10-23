<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getUserInfo } from '@/api/demo'

definePage({
  layout: 'default',
  style: {
    navigationBarTitleText: 'home',
  },
  type: 'home',
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
const resp = ref<any>(null)

async function getUser() {
  const res = await getUserInfo(1)
  resp.value = res
}
</script>

<template>
  <view class="u-bg-#ededed">
    <u-button @click="getUser">
      click
    </u-button>
    <view>
      {{ resp }}
    </view>
    <HomeTop />
    123
    <TaskList />
  </view>
</template>
