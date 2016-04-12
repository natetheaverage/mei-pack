<template>
<div>
	<br><br><br>
	<div 
		class="container" 
		v-if="feature1"
	>
	  <div class="section-header">
	    <h1 class="section-title text-center wow fadeInDown">
	    $2500 Target Gift Card Give Away 
	    </h1>
	    <h3 class="text-center wow fadeInDown">Enter to win</h3>
	    <img 
	      class="media-img col-sm-6" 
	      style="padding:0 15px" 
	      src="/images/cta3/image003.png" 
	    />
	    
	  
	    <div class="col-sm-6 wow fadeInLeft" style="padding-top:30px">
	      <h3 class="column-title">Thats Right $2500</h3>
	    </div>

	    <div class="col-sm-6 wow fadeInRight">
	      Look for your chance to enter at the Denver Spring 2016 show, or the Colorado Springs Spring 2016 show.
	    </div>
	  </div>
	</div>

	<div v-if="feature2">
		<div class="section-header blue-hero" >
		  <h2 class="section-title text-center wow fadeInDown">KRISTIN SOLLENNE</h2>
		  <h3 class="text-center wow fadeInDown">APPEARING IN DENVER, COLORADO SPRINGS, & GREELEY<br> </h3>
		</div>

		<div class="container">
		  <center>
		  	<a href="/features#denver-highlight">
		      <img 
		        data-pin-nopin="true" 
		        src="/images/cta3/cta3-image.jpg" 
		        class="img-responsive wow fadeIn"
		        data-wow-duration="300ms" 
		        data-wow-delay="300ms"
		      />
				</a>
				<br />
				<p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
					Join us and meet Ms. Sollenne in person. 
				</p>
				<p  class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms">
		      <a class="btn btn-primary btn-lg" href="/features#denver-highlight">
		      	More on this
		      </a>
		    </p>
		  </center>
		</div>
	</div>
	<br><br><br>
</div>
</template>
<script>
export default {
	name: 'calltoaction',
  props:['feature'],
  data(){
  	return{
  		feature1: false,
  		feature2: false,
  	}
  },
  computed:{
  	feature(){

  		this.feature1 = true;
  		
  		if(this.feature.id == 2){
  			this.feature2 =  true;
  		}
  	},
  },
  ready(){
  	console.log(this.feature);
  },
}
</script>
<style lang='stylus'>
</style>