
<template>
  <div class="event-full-details">
    <div 
      class="col-md-3 booth-details" 
    >
      <ul>
        <span 
          v-for="(key, price) in event.prices"
        >  
        <h3 v-if="price.name != holdName">Booth Cost</h3>
        <li
          v-html="price.type+'  $'+price.price+'.00"
        ></li></span>
      </ul>
      <ul>
      <span 
          v-for="(key, discount) in event.discounts"
        >  
        <h3 v-if="discount.name != holdName">Booth Cost</h3>
        <li
          v-html="discount.type+'  '+discount.amount+'%'"
        ></li>
        </span>
      </ul>
      

    <div class="col-md-9 event-details">
      <!--  Dates and Times -->
      <date_box :event="event"></date_box>      

      <br>

      <!-- Map and Address -->
      <date_box :event="event"></date_box>  
  
    </div>
  </div>
</template>

<script>
export default {
    name: 'event_full_details',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
        pageTitle: 'Event Full Details',
        holdName: '???',
      }
    },

    methods: {

    },

    ready() {

    }  
  }
</script>

<style lang="stylus">
</style> 