<template>
  <div class="menu-widget">
              <!--Widget-->
          <!--================================-->
          <div class="mainnav-widget">

            <!-- Show the button on collapsed navigation -->
            <div class="show-small">
              <a 
                href="#" 
                data-toggle="menu-widget" 
                data-target="#demo-wg-server"
              >
                <i class="fa fa-desktop"></i>
              </a>
            </div>

            <!-- Hide the content on collapsed navigation -->
            <div id="demo-wg-server" class="hide-small mainnav-widget-content">
              <ul class="list-group">
                <li class="list-header pad-no pad-ver">Server Status</li>
                <li class="mar-btm">
                  <span class="label label-primary pull-right">15%</span>
                  <p>CPU Usage</p>
                  <div class="progress progress-sm">
                    <div class="progress-bar progress-bar-primary" style="width: 15%;">
                      <span class="sr-only">15%</span>
                    </div>
                  </div>
                </li>
                <li class="mar-btm">
                  <span class="label label-purple pull-right">75%</span>
                  <p>Bandwidth</p>
                  <div class="progress progress-sm">
                    <div class="progress-bar progress-bar-purple" style="width: 75%;">
                      <span class="sr-only">75%</span>
                    </div>
                  </div>
                </li>
                <li class="pad-ver"><a href="#" class="btn btn-success btn-bock">View Details</a></li>
              </ul>
            </div>
          </div>
          <!--================================-->
          <!--End widget-->
  </div>
</template>

<script>
export default {
    name: 'Menu Widget',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
        pageTitle: 'MainNav Widget Container '
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