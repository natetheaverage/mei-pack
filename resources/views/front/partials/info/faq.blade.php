<div id="Faq" class="row">
  <div class="col-sm-3 ">
    <h3 class="column-title">Booth Registration</h3>
    <div v-for="application in $root.truth.infoSection.applications | orderBy 'order_column'">
        <a target="_blank" 
        class="btn btn-block btn-primary " 
        :href="'files/'+application.link">
        @{{application.label}} - <i class="fa fa-file-pdf-o"></i>
        </a><br />
    </div>
  </div>

  <div class="col-sm-6">
    <h3 class="column-title">Floorplans</h3>
    <div role="tabpanel">
      <ul class="nav main-tab nav-justified" role="tablist">
        <li 
          v-for="(key, floorplan) in $root.truth.infoSection.floorplans"
          role="presentation" 
        >
          <a 
            :href="'#tab'+key" 
            role="tab" 
            data-toggle="tab" 
            :aria-controls="'tab'+key" 
            :aria-expanded="floorplan.active"
            v-text="floorplan.label"
          ></a>
        </li>
      </ul>
      <div 
        id="tab-content" 
        class="tab-content"
      >
        <floorplans 
          v-for="(key, floorplan) in $root.truth.infoSection.floorplans"
          :data="floorplan"
          :key="key"
        ></floorplans>
      </div>
    </div>
  </div>

  <div class="col-sm-3">
    <h3 class="column-title">Faqs</h3>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <div 
        class="panel panel-default"
        v-for="(key, faq) in $root.truth.infoSection.faqs"
      >
        <div 
          :id="'heading-'+key"
          class="panel-heading" 
          role="tab" 
        >
          <h4 class="panel-title">
            <a 
              data-toggle="collapse" 
              data-parent="#accordion" 
              :href="'#collapse-'+key" 
              :aria-expanded="faq.active" 
              :aria-controls="'collapse-'+key"
            >
            <span 
                v-if="!pageEdit" 
                v-html="faq.label"
            ></span>
            <textarea 
                v-if="pageEdit"
                v-model="faq.label"
                @click="[
                  focusedField = faq.label,
                  focusedSection = '/api/faq'
                ]"
                @keyup="saveCopyText | debounce 300"
                rows="1"
              ></textarea>
            </a>
          </h4>
      </div>
      <div 
        :id="'collapse-'+key" 
        class="panel-collapse collapse"
        :class="{'in' : faq.active}"
        role="tabpanel" 
        :aria-labelledby="'heading-'+key"
      >
        <div class="panel-body">
          <p>
          <span 
              v-if="!pageEdit" 
              v-html="faq.content"
          ></span>
          <textarea 
              v-if="pageEdit"
              v-model="faq.content"
              @click="[
                focusedField = faq.content,
                focusedSection = '/api/faq'
              ]"
              @keyup="saveCopyText | debounce 300"
              rows="5"
            ></textarea>
          </p>
        </div>
      </div>
    </div>
    </div>
  </div> <!-- FAQS -->
</div>