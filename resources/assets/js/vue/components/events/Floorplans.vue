<template>
  <div 
  :id="'tab'+key" 
  :role="'tabpanel'+key" 
  class="tab-pane fade"
  :class="data.active ? 'active in' : ''" 
  :aria-labelledby="'tab'+key"
  >
  <image :src="'/images/frontImages/floorplans/'+data.thumb" />
  <div><center>
    <a 
      target="_blank"
      class="btn btn-primary btn-lg" 
      :href="'/images/frontImages/floorplans/'+data.link">
      Save <i class="fa fa-file-pdf-o"></i>
    </a>
  </center></div>
</div>
</template>
<script>
export default {
  props:['data', 'key'],
  
}

</script>

  
<style lang='stylus'>

</style>