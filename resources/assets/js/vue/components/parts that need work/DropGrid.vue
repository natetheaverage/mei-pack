<style>
    .drop-grid {
        padding: 10px;
        border: 1px solid #000;
        position: absolute;
        
    } 
    
</style>


<template>
    <div class="drop-grid" v-show="show">
        
    </div>
    <alert type="success"> yea bang for sure</alert>
</template>


<script>
export default {
    props: ['type'],
    data() {
        return {
            show: true
        }
    },
    ready() {
        //setTimeout(() => this.show = false, 3000);
    }
}
</script>