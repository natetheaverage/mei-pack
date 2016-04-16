<template>
<!-- VUE Brand Box -->
  <div class="brand-box">
    <img 
      class="brand-logo" 
      :src="company.branding.smallLogo"
    >
    <div class="brand-text-box">
      <h1 
        class="brand-title" 
        v-if="!pubSettings.editMode"
        v-text="company.branding.name"
      ></h1>
      <input
        id="branding-title"
        type="textBox"
        v-if="pubSettings.editMode" 
        class="brand-title vue-model-input" 
        :value="company.branding.name" 
        @input="updateMessage"
      />
      <h3 
        class="brand-sub-title " 
        v-if="!pubSettings.editMode"
        v-text="company.branding.tagLine"
      ></h3>
      <input
        id="branding-tagLine"
        type="textBox"
        class="brand-sub-title vue-model-input" 
        :value="company.branding.tagLine" 
        v-if="pubSettings.editMode" 
        @input="updateMessage"
      />
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
  ready(){
    //console.log( document.querySelector('.brand-title').value )
  }
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
  padding 0 5px 5px 5px
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