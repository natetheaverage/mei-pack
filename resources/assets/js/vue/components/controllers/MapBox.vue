<template>
  <div class="row"><center>
    <div class="event-address">
      <p v-text="event.venue"></p>
      <a href="#">
        <span v-text="event.street"></span>, 
        <br />
        <span v-text="event.city"></span>, 
        <span v-text="event.state"></span> 
        <span v-text="event.zip"></span>
     </a>
     
    </div></center> 
  </div>
  <br />
  <div class="team-img">
    <div 
      :id="'google-map-'+event.id" 
      style="height:100%"
      :data-latitude="event.latitude" 
      :data-longitude="event.longitude"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'mapBox',
  props:['event'],
  data(){
    return{
    
    }
  },
  methods:{
    gMapInit(){
      var myLatlng = {
      'lat': 42.768,//this.event.latitude,
      'lng': -160.2344,//this.event.longitude,
    };
    var mapDiv = 'google-map-'+this.event.id;
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(
      document.getElementById(mapDiv), 
      mapOptions
    );
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
    },
  },

  ready(){
    this.gMapInit();   
  },
  
}
</script>
<style lang='stylus'>
</style>