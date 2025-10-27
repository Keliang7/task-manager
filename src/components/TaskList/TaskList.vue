<script setup lang="ts">
import { onReachBottom } from '@dcloudio/uni-app'
import { onMounted, ref } from 'vue'
import TaskItem from '../TaskItem/TaskItem.vue'

// 定义响应式数据
const status = ref<'loadmore' | 'loading' | 'nomore'>('loadmore')
const list = ref<number>(0)
const page = ref<number>(0)

// 页面上拉触底事件处理

function load() {
  if (page.value >= 3)
    return
  status.value = 'loading'
  page.value = ++page.value
  setTimeout(() => {
    list.value += 10
    if (page.value >= 3)
      status.value = 'nomore'
    else status.value = 'loading'
  }, 2000)
}

onReachBottom(load)

onMounted(() => {
  // 初始化加载数据
  load()
})
</script>

<template>
  <view>
    <view v-for="(_, index) in list" :key="index" class="py-24px u-border-bottom">
      <TaskItem />
    </view>
    <u-loadmore :status="status" />
  </view>
</template>
