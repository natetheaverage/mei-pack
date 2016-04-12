<template>
<div>
  <div class="team-member wow fadeInUp" 
    data-wow-duration="400ms" 
    data-wow-delay="0ms"
    v-for="event in $root.truth.events | filterBy eventName in 'url'"
  >
    <div class="team-info">
    
      <event_page_links :event="event"></event_page_links>

      <!-- Title, Dates & Calendar Links  -->
     
      <dates_box :event="event"></dates_box>
      
      <call_to_action 
        :feature="event.features[0]"      
      ></call_to_action><!--/#cta -->

      <div class="container" style="border-bottom: 1px solid #dbdbdb">
        <div class="section-header">
          <h2 class="section-title text-center wow fadeInDown">
            <textarea 
              class="text-center "
              :disabled="!loggedIn"
              v-model="$root.truth.copyText.eventDetailsTitle"
              @click="[focusedField = 'eventDetailsTitle', focusedSection = '/api/copyText']"
              @keyup="$root.save | debounce 300"
              rows="1"
            ></textarea>
          </h2>
          <p 
            class="text-center wow fadeInDown" 
            v-html="event.details"
          ></p>
        </div>


        <div class="row">
          <div class="features">

            <event_tickets :tickets="event.tickets"></event_tickets>

            <div 
              class="col-md-4 col-sm-12 wow fadeInUp" 
              data-wow-duration="300ms" 
              data-wow-delay="0ms"
            >
              <div class="media service-box">
                <div class="pull-left">
                  <i class="fa fa-ticket"></i>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">Get Your Ticket Now!</h4>
                  <a 
                    class="btn btn-success"
                    target="_blank"
                    :href="event.event_bright"
                  >www.EventBright.com</a>
                </div>
              </div>
            </div><!--/.col-md-4-->

            <div 
              class="col-md-4 col-sm-12 wow fadeInUp" 
              data-wow-duration="300ms" 
              data-wow-delay="100ms"
            >
              <div class="media service-box">
                <div class="pull-left">
                  <i class="fa fa-car"></i>
                </div>
                <div class="media-body">
                <br>
                  <h4 class="media-heading">
                    <textarea 
                      class="text-center "
                      :disabled="!loggedIn"
                      v-model="event.parking"
                      @click="[focusedField = 'parking', focusedSection = '/api/events']"
                      @keyup="$root.save | debounce 300"
                      rows="1"
                    ></textarea>
                  </h4>
                </div>
              </div>
            </div> <!--/.parking-->
          </div>
        </div> 
      </div><!--/.features--> 

      <call_to_action 
        v-if="true"
        :feature="event.features[1]"
      ></call_to_action><!--/#cta -->
    <br />

    <!-- Map and Address -->
    <map_Box :event="event"></map_Box>

  </div>
</div>
</template>
<script>
export default {
  name: 'eventpage',
  props:['eventName'],
  ready(){
    //console.log(this.$root.events)
  },
}
</script>
<style lang='stylus'>
</style>