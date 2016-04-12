<section id="events-header" class="blue-hero">
    <div class="section-header">
        <h2 class="section-title text-center wow fadeInDown">
          <span 
            v-if="!truth.settings.pageEdit" 
            v-html="truth.copyText.introTitle"
          ></span>
          <textarea 
            v-if="truth.settings.pageEdit"
            v-model="truth.copyText.eventTitle"
            @click="[focusedField = 'eventTitle', focusedSection = '/api/copyText']"
            @keyup="saveCopyText | debounce 300"
            rows="1"
          ></textarea>
        </h2>

        <p class="text-center wow fadeInDown">
        <span 
            v-if="!truth.settings.pageEdit" 
            v-html="truth.copyText.eventSubTitle"
          ></span>
          <textarea 
            v-if="truth.settings.pageEdit"
              v-model="truth.copyText.eventSubTitle"
              @click="[focusedField = 'eventSubTitle', focusedSection = '/api/copyText']"
              @keyup="saveCopyText | debounce 300"
              rows="2"
          ></textarea>
        </p>
    </div>
</section>

<div class="container">
  <div class="row" style="margin:10px 0">
    <div 
      class="col-sm-6 col-md-4"
      style="padding-right: 0;" 
      v-for="(key, event) in $root.truth.events"
    >
        <div 
          class="team-member wow fadeInUp" 
          data-wow-duration="400ms" 
          data-wow-delay="0ms"
        >
        <center><a 
          class="btn btn-info"
          :href="'events/'+event.url"
        >Open</a></center>
        {{-- Title, Dates & Calendar Links --}}
        <dates_box 
          :event="event"
        ></dates_box>
        {{-- @include( 'partials.events.dates.greeley-spring-2016') --}}
        <br>
        {{-- Map and Address --}}
        <map_box
          :event="event"
        ></map_box>
        {{-- @include('partials.events.maps.greeley')--}}
      </div>
    </div>

  </div>
</div> 