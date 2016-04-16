
<template>
  <a 
    :href="button.url" 
    class="btn menu-button"
    v-text="button.label"
  ></a>
</template> 
<script>

export default {
    name: 'SubMenuButton',
    parent: 'PrimaryMenuButton',
    props: ['button'],
    data(){
        return{
        	hover: false,
        }
    },
    methods:{
      
    },
    events: {
    	handelSubMenu(id){
    		

    	},
    },
}

</script>
<style lang='stylus'>
.btn 
  border-radius 0
  border 0
</style>