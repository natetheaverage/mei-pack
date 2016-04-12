<div class="col-sm-12">
  <h1 class="column-title">
      <span 
          v-if="!truth.settings.pageEdit" 
          v-html="truth.copyText.eventDetailTabsTitle"
      ></span>
      <textarea 
          v-if="truth.settings.pageEdit"
          v-model="truth.copyText.eventDetailTabsTitle"
          @click="[focusedField = 'eventDetailTabsTitle', focusedSection = '/api/copyText']"
          @keyup="saveCopyText | debounce 300"
          rows="1"
      ></textarea>
  </h1>

  <event_full_detail_tabs></event_full_detail_tabs>

</div>{{-- end col-12 container --}}