<template>
  <!-- MAIN NAVIGATION -->
  <!--===================================================-->
<nav id="mainnav-container">
  <div id="mainnav">
  <shortcutButtons></shortcutButtons>
    <!--Menu--> 
    <!--================================-->
    <div id="mainnav-menu-wrap">
      <div class="nano">
        <div class="nano-content">
          <ul id="mainnav-menu" class="list-group">

            <!--Category name-->
            <li class="list-header">Navigation </li>

            <!--Menu list item-->
            <main-nav-button 
              v-for="button in menuData" 
              :button="button"
            ></main-nav-button>

            <li>
              <a v-link="'/dashboard/help-desk'">
                <i class="fa fa-question"></i>
                <span class="menu-title">
                  <strong>Help Desk</strong>
                </span>
                <span 
                  class="pull-right badge badge-success"
                  v-text="'0?'"
                ></span>
              </a>
            </li>

            <li>
              <a v-link="'/dashboard/super-admin'">
                <i class="fa fa-question"></i>
                <span class="menu-title">
                  <strong>Super Admin</strong>
                </span>
                <span 
                  class="pull-right badge badge-success"
                  v-text="'0'"
                ></span>
              </a>
            </li>

            <li class="list-divider"></li>

            <li 
              v-if="editMode" 
              @click="addButton">
            <a> + Create New Button</a></li>
          </ul>

          <menuwidget></menuwidget>
 
        </div>
      </div>
    </div>
    <!--================================-->
    <!--End menu-->

  </div>
</nav>
<!--===================================================-->
<!--END MAIN NAVIGATION-->
</template>

<script>

import { changeRoute, setMenuActive, setMenu, setSetting } from '../../../../vuex/actions'
import { getRoute } from '../../../../vuex/getters'

module.exports = {
  name: 'Primary Navigation', 
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
    getters: {
      //getMenuData,
      _menuData: ({ menus }) => menus.adminPrimary,
      changedRoute: getRoute,
    },
    actions: {
      setSetting,
      setMenuActive,
      changeRoute,
      setMenu
    },
  },

  computed:{
    menuData(){
      return this._menuData
    },
  },

  events:{
    menuActive(btn){
      this.setSetting('ticketsAdmin', false)
      this.$broadcast('checkButton', btn)
      return true;
    }
  },

  methods: {
    clicked(btn){
      this.setMenuActive(btn)
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
  ready(){
    this.setMenu('adminPrimary')
  },
}
</script>
<style>
/*.v-link-active 
  color: purple
  padding-left: 20px
  font-weight: bold
  box-shadow:inset 2px 2px 2px  4px #999*/
</style>