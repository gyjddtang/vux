<template>
  <div id="app">
    <transition :name="viewDirection | directionFilter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapState('app', [
        'viewDirection',
        'loading'
      ])
    },
    watch: {
      loading (val) {
        if (val) {
          this.$vux.loading.show({
            text: ' '
          })
        } else {
          this.$vux.loading.hide()
        }
      }
    },
    filters: {
      directionFilter (val) {
        switch (val) {
          case 'forward':
            return 'viewRightIn'
          case 'back':
            return 'viewLeftIn'
          default:
            return 'viewFadeIn'
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import "style/index.less";
</style>
