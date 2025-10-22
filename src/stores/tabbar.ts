import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabbarStore = defineStore('tabbar', () => {
  // 定义Tabbar项接口
  interface TabbarItem {
    iconPath: string
    selectedIconPath: string
    text: string
    count?: number
    isDot?: boolean
    customIcon?: boolean
    midButton?: boolean
    pagePath: string
  }

  // 定义响应式数据
  const list = ref<TabbarItem[]>([
    {
      pagePath: '/pages/tabs/task',
      iconPath: '/static/tabs/component.png',
      selectedIconPath: '/static/tabs/component_select.png',
      text: '任务',
    },
    {
      pagePath: '/pages/tabs/review',
      iconPath: '/static/tabs/component.png',
      selectedIconPath: '/static/tabs/component_select.png',
      text: '审核',
    },
    {
      pagePath: '/pages/tabs/data',
      iconPath: '/static/tabs/component.png',
      selectedIconPath: '/static/tabs/component_select.png',
      text: '数据',
    },
    {
      pagePath: '/pages/tabs/employee',
      iconPath: '/static/tabs/component.png',
      selectedIconPath: '/static/tabs/component_select.png',
      text: '员工',
    },
    {
      pagePath: '/pages/tabs/home',
      iconPath: '/static/tabs/component.png',
      selectedIconPath: '/static/tabs/component_select.png',
      text: '首页',
    },
    {
      pagePath: '/pages/tabs/msg',
      iconPath: '/static/tabs/component.png',
      selectedIconPath: '/static/tabs/component_select.png',
      text: '消息',
    },
  ])

  const useList = ref<TabbarItem[]>()

  const getRemoteTabbar = (isAdmin: boolean = false) => {
    useList.value = isAdmin ? list.value.slice(0, 4) : list.value.slice(4, 6)
  }

  return {
    getRemoteTabbar,
    useList,
  }
})
