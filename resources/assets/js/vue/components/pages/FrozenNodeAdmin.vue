<template>
  <div class="SuperAdmin">
    <iframe class="hack-frame" src="/modelAdmin"></iframe>
  </div>
</template>

<script>
import { setSetting } from '../../../vuex/actions'
export default {
    name: 'SuperAdmin',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	pageTitle: 'Help Desk',
        //isOn: false,
      }
    },
    vuex:{
      actions:{ 
        setSetting
      } 
    },
    methods: {
      // turnOn(bool){
      //   this.setSetting('helpDeskVisible', bool)
      // }
    },

    ready() {
      //this.turnOn(this.isOn)
      // console.log(this.$route.path)
      // this.$watch('$route.path', function(cb){
      //   //this.turnOn(!this.isOn)
      //   console.log('cb')
      //   console.log(cb)
      // })
    }
  }
</script>

<style lang="stylus">
.hack-frame
  padding 0
  width 100%
  height 1000px
  margin 0
  border 0
  
</style>
