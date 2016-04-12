<template>
	<div class="gallery-item" :class="image.categories">
	    <div class="gallery-item-inner">
	        <img  
	        	data-pin-nopin="true" 
	        	class="img-responsive" 
	        	:src="'/images/frontImages/gallery/'+image.url" 
	        	:alt="image.alt">
	        <div class="gallery-info"> 
	            <h3 v-text="image.title"></h3>
	            <span class="image-description" v-text="image.description"></span>
	            
	            <a class="preview" @click="openPrettyPhoto" ><i class="fa fa-eye"></i></a> 
	        </div>
	    </div>
	</div><!--/.image-item-->
</template>
<script>
export default {
	name: 'gallery_image',
	props:['image'],
	methods:{
		openPrettyPhoto(){
			console.log("open"+this.image.url )
			var that = this;
			$.prettyPhoto.open(
				'images/frontImages/gallery/'+that.image.url,
				that.image.title,
				that.image.description
			);
		},
	},
}
</script>
<style lang='stylus'>
</style>