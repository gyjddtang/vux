<template>
  <section class="helloContainer">
    <XButton @click.native="goTo" type="primary">领 券</XButton>
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
