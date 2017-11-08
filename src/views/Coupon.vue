<!--
  - Created by Mili on 2017/11/7
 -->

<template lang="html">
  <section class="couponContainer">
    <div class="coupon">
      <div class="merchant">
        <img src="../assets/didi.jpg" alt="logo">
      </div>
      <h3 class="title">滴滴出行100元礼包</h3>
      <p class="condition">有限期至：2017.12.31</p>
      <XButton type="primary" @click.native="showDialog = true" class="getButton">领 取</XButton>
    </div>
    <div class="lacework"></div>
    <XDialog v-model.sync="showDialog" class="dialog-demo" :hide-on-blur="true">
      <h2 class="dialog-title">领取成功</h2>
      <div class="img-box">
        <img src="../assets/bg.jpg">
      </div>
      <div @click="showDialog = false" class="vux-close">知道了</div>
    </XDialog>
  </section>
</template>

<script>
  import { XButton, XDialog } from 'vux'

  export default {
    name: 'coupon',
    components: {
      XButton, XDialog
    },
    data () {
      return {
        showDialog: false
      }
    }
  }
</script>
