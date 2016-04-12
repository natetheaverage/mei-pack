<div class="container">    
    <div class="row flex pad-all">
        <div class="col-sm-9">
            <h1>
                <span 
                    v-if="!pageEdit" 
                    v-html="truth.copyText.introTitle"
                ></span>
                <textarea 
                    v-if="pageEdit"
                    v-model="truth.copyText.introTitle"
                    @click="[focusedField = 'introTitle', focusedSection = '/api/copyText']"
                    @keyup="saveCopyText | debounce 300"
                    rows="1"
                ></textarea>
            </h1>
            <h2><span 
                v-if="!pageEdit" 
                v-html="truth.copyText.introSubTitle"
                ></span>
                <textarea 
                    v-if="pageEdit"
                    v-model="truth.copyText.introSubTitle"
                    @click="[focusedField = 'introSubTitle', focusedSection = '/api/copyText']"
                    @keyup="saveCopyText | debounce 300"
                    rows="1"
                ></textarea>
            </h2>
            <p><span 
                v-if="!pageEdit" 
                v-html="truth.copyText.introText"
                ></span>
                <textarea 
                    v-if="pageEdit"
                    v-model="truth.copyText.introText"
                    @click="[focusedField = 'introText', focusedSection = '/api/copyText']"
                    @keyup="saveCopyText | debounce 300"
                ></textarea>
            </p>
        </div>
        <div class="col-sm-3 flex-center text-center">
            <a 
                class="mtrl-btn mtrl-raised bg-green" 
                v-text="truth.copyText.introButtonText"
                href="/info"
            >
            </a>
            {{-- <a class="btn btn-primary btn-lg" href="/vendors">Vendor Application!</a> --}}
        </div>
    </div>
</div>
