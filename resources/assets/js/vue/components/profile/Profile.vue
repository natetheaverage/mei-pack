<template>
  <div class="Profile">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Profile',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	pageTitle: 'Profile',

      }
    },

    methods: {

    },

    ready() {

    }
  }
</script>

<style lang="stylus">
</style>