<template>
	<div 
    class="col-md-4 col-sm-12 wow fadeInUp" 
    data-wow-duration="300ms" 
    data-wow-delay="0ms"
  >
    <div class="media service-box">
      <div class="pull-left">
        <i class="fa fa-dollar"></i>
      </div>
      <div class="media-body">
        <h4 class="media-heading">
          <textarea 
            class="text-center "
            :disabled="!loggedIn"
            v-model="$root.truth.copyText.eventTicketsTitle"
            @click="[focusedField = 'eventTicketsTitle', focusedSection = '/api/copyText']"
            @keyup="$root.save | debounce 300"
            rows="1"
          ></textarea>
        </h4>
        <ul>
          <li v-for="ticket in tickets | orderBy 'order_column'">
            <small>{{ticket.name}} ${{ticket.price}} {{ticket.description}}</small>
          </li>
        </ul>
      </div>
    </div>
  </div><!--/.col-md-4-->
</template>
<script>
export default {
	name: 'event_tickets',
  props:['tickets'],
  
}
</script>
<style lang='stylus'>
</style>