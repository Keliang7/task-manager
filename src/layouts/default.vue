<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useTabbarStore } from '@/stores/tabbar'

const tabbarStore = useTabbarStore()
const { getRemoteTabbar } = tabbarStore
const { useList } = storeToRefs(tabbarStore)

const pages = getCurrentPages()
const currentPage = pages[pages.length - 1] as any

const title = computed(() => {
  if (useList.value?.length) {
    useList.value?.map(i => i.pagePath).includes(`/${currentPage?.route}`)
    return '管理后台'
  }
  else {
    return '朋友圈转发管理'
  }
})

const isBack = computed(() => {
  if (useList.value?.length) {
    return !useList.value?.map(i => i.pagePath).includes(`/${currentPage?.route}`)
  }
  return true
})

const current = ref<number>(0)

onMounted(() => {
  getRemoteTabbar()
})
</script>

<template>
  <view>
    <u-navbar :is-back="isBack">
      <view class="px-16px text-20px font-700">
        {{ title }}
      </view>
    </u-navbar>
    <view class="px-16px">
      <slot />
    </view>
    <!-- hide-tab-bar 我已经配置了 app.json/tabbar/custom 所以这里不需要它调用隐藏 -->
    <u-tabbar v-model="current" :list="useList" :hide-tab-bar="false" />
  </view>
</template>
