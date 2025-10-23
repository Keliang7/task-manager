<script setup lang="ts">
import { onShareAppMessage } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getUserInfo, loginApi } from '@/api/demo'

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

const userName = ref('')
const password = ref('')
const loginInfo = ref<any>('登录信息')
async function login() {
  const res = await loginApi({
    username: userName.value,
    password: password.value,
  })
  loginInfo.value = res
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
    <view class="bg-green-400">
      <u-input v-model="userName" type="text" :border="true" />

      <u-input v-model="password" type="text" :border="true" />
      <u-button @click="login">
        登录
      </u-button>
      <view>
        {{ loginInfo }}
      </view>
    </view>
    <HomeTop />
    123
    <TaskList />
  </view>
</template>
