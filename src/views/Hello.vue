<template>
  <section class="helloContainer">
    <XButton @click.native="goTo" type="primary">页面跳转</XButton>
  </section>
</template>

<script>
  import { Group, Cell, XButton } from 'vux'

  export default {
    name: 'hello',
    components: {
      Group,
      Cell,
      XButton
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      goTo () {
        this.$router.push({
          name: 'Coupon'
        })
      }
    }
  }
</script>
