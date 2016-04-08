<template>
  <div class="Test">
    <h1> BANG! </h1>
  </div>
</template>

<script>
export default {
    name: 'Test',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	pageTitle: 'test',

      }
    },

    methods: {

    },

    ready() {

    }
  }
</script>

<style>
</style>