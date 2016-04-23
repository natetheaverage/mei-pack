<template>
    <!--Shortcut buttons--> 
    <!--================================-->
    <div id="mainnav-shortcut">
      <ul class="list-unstyled">
        <li class="col-xs-3" data-content="Sidebar Menu">
          <a id="demo-toggle-aside" class="shortcut-grid" href="#">
            <i class="fa fa-magic"></i>
          </a>
        </li>
        <li class="col-xs-3" data-content="A Demo Notification">
          <a id="demo-alert" class="shortcut-grid" href="#">
            <i class="fa fa-bullhorn"></i>
          </a>
        </li>
        <li class="col-xs-3" data-content="Help Desk">
          <a id="Help-Desk" class="shortcut-grid" v-link="help-desk">
            <i class="fa fa-exclamation"></i>
          </a>
        </li>
        <li class="col-xs-3 pad-top" data-content="Go Home">
          <a 
            id="dash-to-home" 
            class="shortcut-grid"
            v-link="dashboard"
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
      	pageTitle: 'MainNav Shortcut Buttons'
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