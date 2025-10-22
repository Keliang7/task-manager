import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  homePage: 'page/tabs/task',
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'uView Pro',
    navigationStyle: 'custom',
  },
  subPackages: [],
  tabBar: {
    custom: true,
    color: '#909399',
    selectedColor: '#303133',
    backgroundColor: '#FFFFFF',
    list: [
      {
        pagePath: 'pages/tabs/task',
        text: '任务',
      },
      {
        pagePath: 'pages/tabs/review',
        text: '审核',
      },
      {
        pagePath: 'pages/tabs/data',
        text: '数据',
      },
      {
        pagePath: 'pages/tabs/employee',
        text: '员工',
      },
      {
        pagePath: 'pages/tabs/home',
        text: '首页',
      },
      {
        pagePath: 'pages/tabs/msg',
        text: '消息',
      },
    ],
  },
})
