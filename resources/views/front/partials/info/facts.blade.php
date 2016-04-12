<div class="pad-all">
    <div class="section-header">
        <h2 class="section-title text-center wow fadeInDown">
                <span 
                    v-if="!pageEdit" 
                    v-html="truth.copyText.factsTitle"
                ></span>
                <textarea 
                    v-if="pageEdit"
                    v-model="truth.copyText.factsTitle"
                    @click="[focusedField = 'factsTitle', focusedSection = '/api/copyText']"
                    @keyup="saveCopyText | debounce 300"
                    rows="1"
                ></textarea>
                </h2>
        <p class="text-center wow fadeInDown">
                <span 
                    v-if="!pageEdit" 
                    v-html="truth.copyText.factsSubTitle"
                ></span>
                <textarea 
                    v-if="pageEdit"
                    v-model="truth.copyText.factsSubTitle"
                    @click="[focusedField = 'factsSubTitle', focusedSection = '/api/copyText']"
                    @keyup="saveCopyText | debounce 300"
                    rows="1"
                ></textarea></p>
    </div>

    <div class="row text-center">
        <div class="col-sm-3 col-xs-6">
            <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
                <div class="animated-number" data-digit="12" data-duration="2000"></div>
                <strong>EVENTS TO DATE</strong>
            </div>
        </div>
        <div class="col-sm-3 col-xs-6">
            <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">
                <div class="animated-number" data-digit="4231" data-duration="2000"></div>
                <strong>TOTAL ATENDEES</strong>
            </div>
        </div>
        <div class="col-sm-3 col-xs-6">
            <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">
                <div class="animated-number" data-digit="227" data-duration="2000"></div>
                <strong>PARTICAPATING VENDORS</strong>
            </div>
        </div>
        <div class="col-sm-3 col-xs-6">
            <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">
                <div class="animated-number" data-digit="1000000" data-duration="2000"></div>
                <strong>POSSIBILITIES</strong>
            </div>
        </div>
    </div>
    <div class="row">
                <div class="col-sm-4">
                    <h3 class="column-title">Our Skills</h3>
                    <strong>GRAPHIC DESIGN</strong>
                    <div class="progress">
                        <div class="progress-bar progress-bar-primary" role="progressbar" data-width="85">85%</div>
                    </div>
                    <strong>WEB DESIGN</strong>
                    <div class="progress">
                        <div class="progress-bar progress-bar-primary" role="progressbar" data-width="70">70%</div>
                    </div>
                    <strong>WORDPRESS DEVELOPMENT</strong>
                    <div class="progress">
                        <div class="progress-bar progress-bar-primary" role="progressbar" data-width="90">90%</div>
                    </div>
                    <strong>JOOMLA DEVELOPMENT</strong>
                    <div class="progress">
                        <div class="progress-bar progress-bar-primary" role="progressbar" data-width="65">65%</div>
                    </div>
                </div>
</div>