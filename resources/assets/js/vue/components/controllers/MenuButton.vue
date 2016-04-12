<template>
		<!-- :class="{'hover-active' : hover}" -->
<div 
  class="mtrl" 
  :class=" hover ? 'mtrl-hover-enter' : 'mtrl-hover-leave'"
>
  <a 
    :href="button.url" 
    class="btn menu-button"
    :class="hover ? 'active' : ''"
    @mouseOver="fireHoverEvent"
    v-text="button.label"
  ></a>
	<div 
    :id="subMenuId"
    
	>
    <submenubutton 
      v-for="button in button.sub"
      :button="button"
		></submenubutton>
	</div>
</div>
</template> 
<script>

export default {
    name: 'PrimaryMenuButton',
    parent: 'MainMenu',
    props: ['button'],
    data(){
        return{
        	hover: false,
          subMenuId: 'sub-menu-'+this.button.id,
          subHeight: 0,
          subMenuExists: '',
        }
    },

    methods:{
      closeSub(el){
        dynamics.animate(el, {
          opacity: 0,
          height: 0
        }, {
          type: dynamics.easeInOut,
          duration: 300,
          friction: 100
        })
      },
      openSub(el){
        var that = this
        dynamics.animate(el, {
          opacity: 1,
          height: (that.button.sub.length * 32),
        }, {
          type: dynamics.spring,
          frequency: 100,
          friction: 300,
          duration: 800
        })
      },

      fireHoverEvent(){
        if(this.button.type == 'primary'){
          this.$dispatch('menuHover', this.button.id)
        }
      },
    },
    events: {
    	handelSubMenu(id){
    		//console.log(id +' '+ this.button.id)
    		if(id == this.button.id){
          this.hover = true;
          this.openSub(this.subMenuId)
                  
    		}else{
    			this.hover = false;
          this.closeSub(this.subMenuId)
    		}

    	},
    },
    ready(){
      this.subMenuId = document.querySelector('#'+this.subMenuId)
      
      dynamics.animate(this.subMenuId, {
          opacity: 0,
          scale: .1
        }, {
          type: dynamics.easeInOut,
          duration: 300,
          friction: 100
        })
      this.closeSub(this.subMenuId)
    }
}

</script>
<style lang='stylus'>
.btn 
  border-radius 0
  border 0
</style>