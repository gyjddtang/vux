<!--
  - Created by Mili on 2017/11/7
 -->

<template lang="html">
  <section class="section couponContainer">
    <ul class="couponList">
      <li v-for="(item, index) of dataSource" :key="'liet' + index" @click="showDetail(item)">
        <div class="coupon">
          <div class="top" :style="{ background: couponColor[item.ticketType - 1] }">
            <h3 class="text">{{ item.name }}</h3>
            <div class="arrow"></div>
          </div>
          <div class="content">
            <div class="money" :style="{ color: couponColor[item.ticketType - 1] }">¥<span :style="{ color: couponColor[item.ticketType - 1] }">{{ item.money }}</span></div>
            <div class="detail">
              <p class="couponNum">券号：{{ item.number }}</p>
              <p class="condition">{{ item.condition }}</p>
              <p class="time">有效期至：{{ item.time }}</p>
            </div>
          </div>
        </div>
        <div class="lacework"></div>
      </li>
    </ul>
    <XDialog
      v-model="showDialog"
      :dialog-style="{ background: 'transparent' }"
    >
      <div slot="default" class="dialogContainer">
        <img src="../assets/dialog_top.png" alt="国资商城" class="dialogLogo">
        <div class="main">
          <h2 class="title">{{ dialogData.name }}</h2>
          <Qrcode :value="dialogData.number + ''" :size="180"></Qrcode>
          <p class="footer">券号：{{ dialogData.number }}</p>
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
  import { XDialog } from 'vux'
  import Qrcode from 'qrcode.vue'

  export default {
    name: 'coupon',
    components: {
      XDialog, Qrcode
    },
    data () {
      return {
        couponColor: ['#e8342f', '#F59B0F', '#24B5AD'],
        showDialog: false,
        dialogData: {},
        dataSource: [
          {
            name: '滴滴专车券',
            money: 20,
            number: 2017112100001,
            condition: '满50元可使用，限云南地区用户',
            time: '2017-12-01',
            ticketType: 2
          }, {
            name: '美团优惠券',
            money: 5,
            number: 2017112100002,
            condition: '满20元可使用',
            time: '2017-11-30',
            ticketType: 3
          }, {
            name: '国资优惠券',
            money: 100,
            number: 2017112100003,
            condition: '满400元可使用，可叠加',
            time: '2017-12-31',
            ticketType: 1
          }
        ]
      }
    },
    methods: {
      showDetail (item) {
        this.showDialog = true
        this.dialogData = item
      }
    }
  }
</script>
