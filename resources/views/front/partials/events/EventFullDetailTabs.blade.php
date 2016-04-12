<div role="tabpanel">

	{{-- start tabs --}}
	<ul class="nav main-tab nav-justified" role="tablist">
	  <li 
	  	role="presentation" 
	  	v-for="(key, event) in $root.truth.events"
	  	:class="event.active" 
  	>
	    <a 
		    @click="$root.initMap(key) | debounce 500"
		    :href="'#details-tab-'+key" 
		    role="tab" 
		    data-toggle="tab"  
		    :aria-controls="'details-tab-'+key" 
		    aria-expanded="true"
		    v-html="event.name"	    
	    ></a>
	  </li>  
	</ul>{{-- end tabs --}}

  {{-- start tab content --}}
  <div id="tab-content" class="tab-content row">
  
    {{-- start tab 1 --}}
    <div 
      id="'details-tab-'+key" 
      role="tabpanel" 
      v-for="(key, event) in $root.truth.events"
      class="tab-pane fade active in" 
      aria-labelledby="'details-tab-'+key" 
    >
    	<event_full_details :event="event"></event_full_details>
      
      
  	</div> {{-- end tab 1 --}}

  </div>{{-- end tab content --}}

</div>{{-- end tab panel --}}

  

      