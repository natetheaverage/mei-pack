 <template>
		<!-- :class="{'hover-active' : hover}" -->
<div 
  class="mtrl" 
  :class=" active ? 'mtrl-hover-enter' : 'mtrl-hover-leave'"
>
    <!-- :href="button.url"  -->
  <a 
    class="btn menu-button"
    :class="active ? 'active' : ''"
    @click="fireButtonEvent"
    v-link="button.href"
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
    parent: 'PrimaryMenu',
    props: ['button'],
    data(){
        return{
        	active: false,//this.active,
          menuLoaded: false,
          subMenuId: 'sub-menu-'+this.button.id,
          subHeight: 0,
          subMenuExists: '',
        }
    },
    computed:{
      active(){ 
        if(this.menuLoaded){
          var subMenu = document.getElementById(this.subMenuId)
          if(this.button.active){ this.openSub(subMenu)
          }else{ this.closeSub(subMenu) }
          return this.button.active
        }
      },
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
          height: (that.button.sub.length * 35),
        }, {
          type: dynamics.spring,
          frequency: 100,
          friction: 300,
          duration: 1000
        })
      },

      fireButtonEvent(){
        if(this.button.menu_name == 'primary'){
          this.$dispatch('menuActive', this.button)
        }
      },
    },
    events: {
    	handelSubMenu(id){
    		if(id == this.button.id){
          this.active = true;
          this.openSub(this.subMenuId) 
    		}else{
    			this.active = false;
          this.closeSub(this.subMenuId)
    		}

    	},
    },
    ready(){
      var subMenu = document.getElementById(this.subMenuId)
      dynamics.animate(subMenu, {
          opacity: 0,
          scale: .1
        }, {
          type: dynamics.easeInOut,
          duration: 300,
          friction: 100
        })
      this.closeSub(subMenu)
      this.menuLoaded = true
    }
}

</script>
<style lang='stylus'>
.btn 
  border-radius 0
  border 0
</style>