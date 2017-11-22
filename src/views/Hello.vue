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
  import store from '../store'

  export default {
    name: 'hello',
    data () {
      return {
      }
    },
    beforeRouteEnter (to, from, next) {
      let { openid } = to.query
      store.dispatch('coupon/receiveSign', openid)
        .then(res => {
          if (res.sign) {
            next({
              path: '/coupon',
              query: {
                openid: openid
              }
            })
          } else {
            next()
          }
        })
    },
    methods: {
      receiveCoupon () {
//        this.$vux.loading.show({
//          text: '处理中…'
//        })
        this.$router.push({
          path: '/coupon',
          query: {
            openid: this.$route.query.openid
          }
        })
      }
    }
  }
</script>
