<template>
  <section class="section helloContainer">
    <img src="../assets/big_title.png" alt="国资商城第三方优惠券" class="bigTitle">
    <p class="point">{{ active.activityName }}<br><span>{{ active.description }}</span></p>
    <div class="redPacket">
      <p class="title">优惠券礼包</p>
      <p class="money">??? <span>元</span></p>
      <div class="getButton" @click="receiveCoupon">立即<br>领取</div>
    </div>
    <img src="../assets/logo.png" alt="国资商城" class="footerLogo">
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { AlertModule } from 'vux'
  import store from '../store'
  import { md5Sign } from '../units/common'

  export default {
    name: 'hello',
    data () {
      return {
      }
    },
    computed: {
      ...mapState('coupon', [
        'active'
      ])
    },
    beforeRouteEnter (to, from, next) {
      let { openid } = to.query
      let data = md5Sign({
        weixinOpenID: openid
      })
      store.dispatch('coupon/checkQualify', data)
        .then(({ valid, message }) => {
          if (valid === '0') {
            next({
              path: '/coupon',
              query: {
                openid: openid
              }
            })
            if (message) {
              AlertModule.show({
                title: '提示',
                content: message
              })
            }
          } else {
            next()
          }
        })
    },
    methods: {
      ...mapActions('coupon', [
        'couponReceive'
      ]),

      receiveCoupon () {
        let { openid } = this.$route.query
        let data = md5Sign({
          channelID: 1,
          weixinOpenID: openid
        })
        this.couponReceive(data)
          .then(data => {
            this.$router.push({
              path: '/coupon',
              query: {
                openid: openid
              }
            })
          })
      }
    }
  }
</script>
