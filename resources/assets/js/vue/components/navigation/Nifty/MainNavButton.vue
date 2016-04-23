<template>
<li :class="active ? 'active' : ''" >
  <div 
    class="col-xs-2 pad-no" 
    v-if="editMode"
  > 
    <a 
      style="padding:10px 10px" 
      @click="$root.editButton(button)"  
      class="pad-no text-bold text-bright" 
    ><i class="fa fa-edit"></i></a>
  </div>
  <objecteditor :object="button"></objecteditor>
    <a 
      @click="buttonClicked(button)"
      @dblclick="changeType" 
      v-link="button.href"
    ><i :class="'fa ' +button.icon"></i>
      <span class="menu-title">
        <strong v-text="button.label"></strong>
      </span>
          <i :class="{'arrow': isFolder}"></i>
        <span 
          v-if="hasBadge" 
          class="pull-right badge badge-success"
        ></span>
    </a>
    <ul 
      class="collapse" 
      :class="{'in': active}"
    >
      <mainnavbutton 
        v-for="button in button.submenu" 
        :button="button"
      ></mainnavbutton>
        <li 
          v-if="editMode" 
          @click="addButton"
        >
      <a> + Create New Button</a></li>
    </ul>
</li>
</template>

<script>
export default {
  name: 'mainnavbutton',
  props: ['button'],
  watchModes: true,

  data() {
    return {
      objectResource: this.$resource('/:objectType'),
      currentView: false,
      editMode: false,
      view: "MainNav",
      active: false,
    }
  },

  computed:{
    isFolder() {
        return this.button.submenu 
            && this.button.submenu.length;
    }
  },

  methods: {
    // When a Menu Button is clicked tell parent to inform all buttons
    buttonClicked(btn){
      this.$dispatch('menuActive', btn)

    },
    // When parent broadcasts even if this is the button
    // original call came from handel it here. 
    clickHandler(btn){
       if(btn.value==='isFirstFolder' ){
        this.active = !this.active
      }
      if(btn.value==='isThirdTier' || 
        btn.value==='isSecondTier' || 
        btn.value==='isSecondFolder' ){
        //console.log('Bang from 2nd tier')
        this.$parent.active = true
        this.active = !this.active
      }
    },

    // TODO make this work by altering the store
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
      if(btn === this.button){ this.clickHandler(btn)
      }else{ this.active = false }
      return true
    })
  },
}
</script>
<style></style>