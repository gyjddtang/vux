<!--
  - Created by Mili on 2017/11/7
 -->

<template lang="html">
  <section class="section couponContainer">
    <ul class="couponList">
      <li v-for="(item, index) of couponList" :key="'coupon' + index" @click="showDetail(item)">
        <div class="coupon">
          <div class="top" :style="{ background: couponColor[item.ticketType - 1] }">
            <h3 class="text">{{ item.ticketName }}</h3>
            <div class="arrow"></div>
          </div>
          <div class="content">
            <div class="money" :style="{ color: couponColor[item.ticketType - 1] }">¥<span :style="{ color: couponColor[item.ticketType - 1] }">{{ item.discountFee }}</span></div>
            <div class="detail">
              <p class="couponNum">券号：{{ item.ticketNo }}</p>
              <p class="condition">{{ item.ticketDescription }}</p>
              <p class="time">有效期至：{{ item.expireTime }}</p>
            </div>
          </div>
        </div>
        <div class="lacework"></div>
      </li>
    </ul>
    <XDialog
      v-model="showDialog"
      :dialog-style="{ background: 'transparent' }"
      @on-hide="onHide"
    >
      <div slot="default" class="dialogContainer">
        <img src="../assets/dialog_top.png" alt="国资商城" class="dialogLogo">
        <div class="main">
          <h2 class="title">{{ dialogData.ticketName }}</h2>
          <Qrcode :value="dialogData.ticketNo" :size="180"></Qrcode>
          <p class="footer">券号：{{ dialogData.ticketNo }}</p>
        </div>
        <div class="closeBar" @click="showDialog = false">
          <div class="line"></div>
          <div class="button"><em></em></div>
        </div>
      </div>
    </XDialog>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { XDialog } from 'vux'
  import Qrcode from 'qrcode.vue'
  import { md5Sign } from '../units/common'

  export default {
    name: 'coupon',
    components: {
      XDialog, Qrcode
    },
    data () {
      return {
        couponColor: ['#e8342f', '#F59B0F', '#24B5AD', '#1777A9', '#CB9E2E', '#ED3E96', '#EB827E'],
        showDialog: false,
        dialogData: {}
      }
    },
    computed: {
      ...mapState('coupon', [
        'couponList'
      ])
    },
    mounted () {
      this.getData()
    },
    methods: {
      ...mapActions('coupon', [
        'couponQuery'
      ]),

      getData () {
        let { openid } = this.$route.query
        let data = md5Sign({
          weixinOpenID: openid
        })
        this.couponQuery(data)
      },

      onHide () {
        this.getData()
      },

      showDetail (item) {
        this.dialogData = item
        this.showDialog = true
      }
    }
  }
</script>
