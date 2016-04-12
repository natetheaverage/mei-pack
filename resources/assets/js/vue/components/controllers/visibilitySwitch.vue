<template>
<!--Boss visibility scope switch-->
<div class="btn-group">
    <button 
        @click="setScope('all')"
        class="btn btn-info mar-btm"
        :class="visibility.all ? 'btn-success' : ''"
    >All</button>
    <button
        @click="setScope('active')"
        class="btn btn-info mar-btm"
        :class="visibility.active ? 'btn-success' : ''"
    >Active</button>
    <button
        @click="setScope('completed')"
        class="btn btn-info mar-btm"
        :class="visibility.completed ? 'btn-success' : ''"
    >Completed</button>
</div>
</template>

<script>
export default {
    name: 'visibilitySwitch',
    data(){
        return{
            name: 'visibilitySwitch',
            visibility:{
                all:false,
                active:true,
                completed:false,
            }
        }
    },
    methods: {
        setScope(mode){
            this.visibility.all = false;
            this.visibility.active = false;
            this.visibility.completed = false;
            this.visibility[mode] = true;
            this.$parent.visibleScope = mode;
        },
    },
    created(){
        //console.log("%c<< %s.vue >> Created!", this.$root.logGood, this.name);
    },
    ready() {
        //console.log("%c<< %s.vue >> Ready!", this.$root.logGood, this.name);
    },
    beforeDestroy(){
        //console.log("%c<< %s.vue >> Destroying!", this.$root.logGood, this.name);
    }
}
</script>
<style>
</style>
