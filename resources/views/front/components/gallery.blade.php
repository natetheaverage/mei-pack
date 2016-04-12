<div class="pad-all">
  <div class="section-header">
    <h2 class="section-title text-center wow fadeInDown">
    <span 
      v-if="!truth.settings.pageEdit" 
      v-html="truth.copyText.galleryTitle"
    ></span>
    <textarea  
        v-if="truth.settings.pageEdit"
        v-model="truth.copyText.galleryTitle"
        @click="focusedField = 'galleryTitle'"
        @keyup="saveCopyText | debounce 300"
        rows="1"
      ></textarea>
    </h2>
    <p class="text-center wow fadeInDown">
    <span 
        v-if="!truth.settings.pageEdit" 
        v-html="truth.copyText.gallerySubTitle"
    ></span>
    <textarea 
        v-if="truth.settings.pageEdit"
        v-model="truth.copyText.gallerySubTitle"
        @click="focusedField = 'gallerySubTitle'"
        @keyup="saveCopyText | debounce 300"
        rows="1"
      ></textarea>
    </p>
  </div> 

  <div class="text-center">
    <ul class="gallery-filter">
      <li><a class="active" href="#" data-filter="*">All gallery</a></li>
      <li v-for="category in $root.truth.images.categories"><a href="#" data-filter=".outdoor" v-text="category" ></a></li>
    </ul><!--/#image-gallery-filter-->
  </div>

  <div 
    class="gallery-items"
  >
    <gallery_image 
      v-for="(key, image) in $root.truth.images.collection"
      :image="image"
    ></gallery_image>
  </div>
</div><!--/.container-->