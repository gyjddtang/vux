<template>
  <section class="section helloContainer">
    <img src="../assets/big_title.png" alt="国资商城第三方优惠券" class="bigTitle">
    <p class="point">恭喜您收到100元<br>第三方专属优惠券礼包</p>
    <div class="redPacket">
      <p class="title">优惠券礼包</p>
      <p class="money">100 <span>元</span></p>
      <div class="getButton" @click="receiveCoupon">立即<br>领取</div>
    </div>
    <img src="../assets/logo.png" alt="国资商城" class="footerLogo">
  </section>
</template>

<script>
  import { XButton } from 'vux'

  export default {
    name: 'hello',
    components: {
      XButton
    },
    data () {
      return {
      }
    },
    methods: {
      receiveCoupon () {
        this.$router.push({
          name: 'Coupon'
        })
      }
    }
  }
</script>
