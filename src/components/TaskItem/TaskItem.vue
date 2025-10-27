<script setup lang='ts'>
function copy(params: string) {
  uni.setClipboardData({
    data: params,
    success() {
      uni.showToast({
        title: '已复制到剪贴板',
        icon: 'success',
      })
    },
  })
}
</script>

<template>
  <view class="p-14px b-1px b-solid b-#E6E6E6 p-12px rd-16px">
    <view class="flex j-b">
      <view>
        <view class="text-18px font-700">
          周末大促销活动
        </view>
        <view class="text-#4B5663">
          转发促销推文到朋友圈
        </view>
      </view>
      <view class="bg-#FFF7EE text-#F45F28 flex j-c a-c rd-8px px-8px py-6px h-fit">
        未完成
      </view>
    </view>
    <view class="mt-12px bg-#FFF7EE text-#F45F28 py-6px px-14px rd-16px text-16px ">
      <view class=" i-carbon-time-filled" />
      截止时间：今日18:00
    </view>
    <view class="mt-12px flex bg-#F8FAFB rd-16px">
      <u-image src="https://ik.imagekit.io/anyup/uview-pro/logo/default.png" class="w-100px h-100px" />
      <view>
        <view class="text-18px font-700">
          周末特惠！全场8折起
        </view>
        <view>精选商品限时优惠，错过再等一年</view>
      </view>
    </view>
    <view class="mt-12px flex bg-#EFF6FF rd-16px p-14px">
      <view>
        <view class="font-700 text-#0A41AC">
          推荐转发文案
        </view>
        <view class="text-#0151D4">
          “周末好去处,我们超市正在举办大促销活动，全场8折起，品质保证，价格实惠！大家快来抢购吧”
        </view>
      </view>
      <view class="flex gap-6px bg-#D9EBFD rd-8px h-fit p-4px text-#0151D4 a-c" @click="copy('“周末好去处,我们超市正在举办大促销活动，全场8折起，品质保证，价格实惠！大家快来抢购吧”')">
        <view class="i-carbon-copy" />
        <view class="w-28px">
          复制
        </view>
      </view>
    </view>
    <view class="mt-12px flex gap-16px font-700">
      <view class="flex-1">
        <u-button type="primary">
          <view class="i-carbon-share" />
          <view class="pl-6px">
            立即转发
          </view>
        </u-button>
      </view>
      <u-button>
        <u-icon name="camera-fill" size="large" />
        <view class="pl-6px">
          提交凭证
        </view>
      </u-button>
    </view>
  </view>
</template>
