<template>
<!-- VUE Brand Box -->
  <div class="brand-box">
    <img 
      class="brand-logo" 
      :src="'/images/'+theme+'/logos/'+company.branding.smallLogo" 
    >
      <!-- :src="company.branding.smallLogo"  -->
    <div class="brand-text-box">
        <!-- v-if="!pubSettings.editMode" -->
        <!-- v-text="company.branding.name" -->
      <h1 
        class="brand-title" 
      ><editable-copy
          :name-of-parent="'BrandBox_'+id"
          instance-number="0"
          use-html="true" 
        ></editable-copy>
      </h1>
      <!-- <input
        id="branding-title"
        type="textBox"
        v-if="pubSettings.editMode" 
        class="brand-title vue-model-input" 
        :value="company.branding.name" 
        @input="updateMessage"
      /> -->
        <!-- v-if="!pubSettings.editMode" -->
        <!-- v-text="company.branding.tagLine" -->
      <h3 class="brand-sub-title " 
      ><editable-copy
          :name-of-parent="'BrandBox_'+id"
          instance-number="1"
          use-html="true" 
        ></editable-copy>
      </h3>
    </div>
  </div>

</template>

<script>
import { getPublicSettings } from '../../vuex/getters.js'
import { getCompanyDetails } from '../../vuex/getters.js'
import { setCompanyBrandingDetail } from '../../vuex/actions.js'

export default {
  name: 'brand-box',
  logHooksToConsole: true,
  watchMode: true,
  props:['theme', 'id'],
  vuex:{
    getters:{ 
      company: getCompanyDetails,
      pubSettings: getPublicSettings
    },   
    actions:{ 
      setCompanyBrandingDetail
    } 
  },
  methods: {
    updateMessage(e){
      this.setCompanyBrandingDetail(e.target.id.split('-').pop(), e.target.value)
    },

  },

}
</script>
<style lang="stylus">
.brand-box
  position relative
  display flex
  margin auto 2px auto 2px
  flex 1
.brand-logo
  max-height 50px
  min-height 40px
  margin 0 5px 5px 5px
  border-radius 10px
  border 1px silver solid
.brand-text-box
  display flex
  line-height 20px
  flex-direction column
.brand-title
  font-size 18px
  margin 5px 0 0 0
  font-weight 600
.brand-sub-title
  font-size 14px
  margin 5px 0 0 0
  font-weight 400
</style>