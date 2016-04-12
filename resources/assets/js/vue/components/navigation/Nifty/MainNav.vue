<template>
  <!-- MAIN NAVIGATION -->
  <!--===================================================-->
<div id="mainnav-container">
  <div id="mainnav">

    <!--Shortcut buttons--> 
    <!--================================-->
    <div id="mainnav-shortcut">
      <ul class="list-unstyled">
        <li class="col-xs-4" data-content="Additional Sidebar">
          <a id="demo-toggle-aside" class="shortcut-grid" href="#">
            <i class="fa fa-magic"></i>
          </a>
        </li>
        <li class="col-xs-4" data-content="Notification">
          <a id="demo-alert" class="shortcut-grid" href="#">
            <i class="fa fa-bullhorn"></i>
          </a>
        </li>
        <li class="col-xs-4 pad-top" data-content="grrrrr">
          <a id="demo-alert" class="shortcut-grid" href="#">
            <i class="fa fa-youtube"></i>
            </a>
        </li>
      </ul>
    </div>
    <!--================================-->
    <!--End shortcut buttons-->


    <!--Menu--> 
    <!--================================-->
    <div id="mainnav-menu-wrap">
      <div class="nano">
        <div class="nano-content">
          <ul id="mainnav-menu" class="list-group">

            <!--Category name-->
            <li 
              class="list-header"
              @click="changeRoute('employee')"
            >Navigation </li>

            
            
            <!--Menu list item-->
            <li 
              v-for="button in menudata" 
              :class="button.class"
            >
              <!--  -->
              <mainnavbutton 
                :button="button"
              >
              </mainnavbutton>
            </li>
              <!-- TODO -->
            <li 
              v-if="editMode" 
              @click="addButton">
            <a> + Create New Button</a></li>
              <!-- // <pre>@{{ editable | json }}</pre> -->
              <!-- // <objecteditor objectid="" button="{menu_id:'',label:''}"></objecteditor> -->
          </ul>

          <li class="list-divider"></li>

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
      </div>
    </div>
    <!--================================-->
    <!--End menu-->

  </div>
</div>
<!--===================================================-->
<!--END MAIN NAVIGATION-->
</template>

<script>

import { changeRoute } from '../../vuex-actions'
import { getRoute } from '../vuex/getters'

module.exports = {
  ready() {
    alert("bang from MainNav.vue@ready")
  },

  name: 'MainNav', 
  logHooksToConsole: true,
  watchModes: true,
  
    data() {
      return {
        pageTitle: 'Main Navigation',
        editMode: false,
        dataMode: false,
        //objectResource: this.$root.mainnav,
        //buttonEditorTemplate: $('#object-editing-form').html(),
        currentIcon: 'fa-question',
        menuId: 1,
      };
    },

    vuex: {
      actions: {
        routeChange: changeRoute,
      },
      getters: {
        // note that you're passing the function itself, and not the value 'getCount()'
        changedRoute: getRoute,
      },
    },

    computed:{
      //menudata(){ return this.$root.mainnav }
    },

    methods: {
      isActiveLink(btn){
        //return (this.$route.path == btn.href);
      },

      

      addButton() {
        // click add new button
        // details for button entered by user
        //    - walk through details step by step
        //    - new page or popup with general form for backup (exists first)
        // button details are persisted to database
        // button added to live Vue
        //var newButton = this.buttonTemplate;
        var newButton = {
          id: null,
          label: 'New Button',
          href: '#',
          icon: 'fa-question',
          name: 'new_button',
          menu_id: 0,
          menu_name: 'mainnav',
          menu_order: (this.menudata.length + 1),
          family: 'button', 
          type: 'navigation',
          owner_id: this.menuId,
          owner_type: 'mainnav',
        };

        this.objectResource.save(
          {objectType: "interfaceObjects"},
          newButton, 
          function (data, status, request) {
            this.menudata.push(data);
        }).error(function (data, status, request) {
            //console.log("%cSomething went wrong with (mainnav.js->addButton->object.save) Error Stat = %s here is the request = %s", this.$root.logErr, status, request)
        })
      }
    }, 
  };
</script>

<style>
/*.v-link-active 
  color: purple
  padding-left: 20px
  font-weight: bold
  box-shadow:inset 2px 2px 2px  4px #999*/
</style>