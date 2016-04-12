<style></style>
<template>
 <div 
  class="col-xs-2 pad-no" 
  v-if="editMode"
>
    <a 

      style="padding:10px 10px" 
      @click="$root.editButton(button.id)"  
      class="pad-no text-bold text-bright" 
    ><i class="fa fa-edit"></i></a>
  </div>
  <objecteditor :object="button"></objecteditor>

      <!-- @click="clickHandler(button)"  -->
    <a 
      @click="$root.updateMenu(button)"
      @dblclick="changeType" 
    >
      <!-- v-link="{ path: button.href }" -->
    
    <!-- //object icon here -->
        <i class="fa {{button.icon}}"></i>
        <span class="menu-title">
            <strong>{{button.label}}</strong>
        </span>
          <i :class="{'arrow': isFolder}"></i>
        <span 
          v-if="hasBadge" 
          :class="pull-right badge badge-success"
        ></span>
    </a>
    <ul 
      class="collapse" 
      :class="{'in': isOpen}"
    >
        <li 
          v-for="button in button.submenu"
          :class="button.class"
        >
            <mainnavbutton 
              :button="button"
            >
            </mainnavbutton>
        </li>
        <li 
          v-if="editMode" 
          @click="addButton"
        >
      <a> + Create New Button</a></li>
    </ul>
</template>

<script>
export default {
    name: 'mainnavbutton',
    props: ['button'],
    watchModes: true,

    data() {
      return {
        editMode: false,
        class:'',
        objectResource: this.$resource('/:objectType'),
        isOpen: false,
        currentView: false,
        view: "MainNav",
      }
    },

    computed: {
      active(){if(this.isOpen){return 'active'}},
      subActive(){if(this.isOpen){return 'sub-active'}},
      isFolder() {
          return this.button.submenu 
              && this.button.submenu.length;
      }
    },

    methods: {
      clickHandler(btn){
        if(btn.value==='isFirstFolder' || btn.value==='isSecondFolder' ){
          this.isOpen = !this.isOpen;
          this.button.class = (this.active +' '+ this.subActive);
          return;
        }
        if(btn.value==='isThirdTier' || btn.value==='isSecondTier'){
          this.$parent.button.class = 'sub-active active'
        }
        this.$route.router.go({ path: btn.href })
        this.button.class = 'active-link';
        //this.$root.updateMenu(btn);
        
      },


      toggle: function () {
        //This is crap
        // $('#mainnav-menu > li > a, #mainnav-menu-wrap .mainnav-widget a[data-toggle="menu-widget"]').popover('destroy').unbind('mouseenter mouseleave');
      },

      changeType: function () {
        if (!this.isFolder && this.button.value != 'isThirdTier') {
          this.button.$add('submenu', [])
          this.button.value = 'isFolder'
          this.addButton()
          this.open = true
          this.save(this.button.id)
        }
      },

      addButton: function () {
        var newButton = {
            id: null,
            href: '',
            icon: 'fa-question',
            label: 'New Button',
            name: 'new_button',
            value: '',
            menu_id: this.button.id,
            menu_name: this.button.name,
            menu_order: (this.button.submenu.length + 1),
            family: 'button',
            type: 'navigation',
            owner_id: this.button.id,
            owner_type: 'mainnav',
          };
          
        this.objectResource.save(
          {objectType: "interfaceObjects"},
          {newButton}, 
          function (data, status, request) {
            console.log("%cmainnavbutton.js->addButton->objectArray.save)", this.$root.logGood)
            this.button.submenu.push(data);
        }).error(function (data, status, request) {
            console.log("%cmainnavbutton.js->addButton->objectArray.save) Error", this.$root.logErr)
        })   
      },
      
    },

    created(){

      this.$watch("$root.editMode", 
        function(response){this.editMode = response;});
      this.$watch("$root.dataMode", 
        function(response){this.dataMode = response;});

      this.$on('checkButton', function (btn) {
        this.button.class = '';
        if(btn === this.button){ 
          this.clickHandler(btn) 
        }
        return true;
      })

    }
    
    
  
} // END Modual Exports
</script>