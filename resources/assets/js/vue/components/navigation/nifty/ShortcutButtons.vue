<template>
    <!--Shortcut buttons--> 
    <!--================================-->
    <div id="mainnav-shortcut">
      <ul class="list-unstyled">
        <li class="col-xs-4" data-content="Sidebar Menu">
          <a id="demo-toggle-aside" class="shortcut-grid" href="#">
            <i class="fa fa-magic"></i>
          </a>
        </li>
        <li class="col-xs-4" data-content="A Demo Notification">
          <a id="demo-alert" class="shortcut-grid" href="#">
            <i class="fa fa-bullhorn"></i>
          </a>
        </li>
        <li class="col-xs-4 pad-top" data-content="Go Home">
          <a 
            id="dash-to-home" 
            class="shortcut-grid"
            v-link="{name: 'welcome'}"
          ><i class="fa fa-home"></i>
          </a>
        </li>
      </ul>
    </div>
    <!--================================-->
    <!--End shortcut buttons-->	
</template>

<script>
export default {
    name: 'Shortcut Buttons',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	
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