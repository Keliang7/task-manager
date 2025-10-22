<script setup lang='ts'>
import { ref } from 'vue'

const list = ref([
  {
    name: '今日任务',
    number: 3,
    color: 'blue',
  },
  {
    name: '已完成',
    number: 2,
    color: 'green',
  },
  {
    name: '未完成',
    number: 1,
    color: 'red',
  },
])
</script>

<template>
  <view class="flex j-a a-c w-full pt-30px pb-14px">
    <view v-for="({ name, number, color }, index) in list" :key="index" class="text-center">
      <view :style="{ color }" class="text-20px font-700">
        {{ number }}
      </view>
      <view class="text-12px">
        {{ name }}
      </view>
    </view>
  </view>
</template>
