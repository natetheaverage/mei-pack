<template>
<div class="editable-copy">
  <div v-if="!editMode">
    <span 
      v-if="html" 
      v-html="copyObject.copy"
      style="width:100%"
	  ></span>
    <span 
      v-if="!html" 
      v-text="copyObject.copy"
      style="width:100%"
    ></span>
  </div>
<!-- :rows="copyObject.height" -->
  <textarea 
      v-if="editMode"
      :value="copyObject.copy"
      @blur="saveVersion"
      @input="persistCopyText | debounce 500"
      placeholder="start typing to save new copy"
      style="width:100%"
  ></textarea>

    <!-- <a class="mtrl-btn mtrl-primary mtrl-raised"
      v-if="editMode"
      @click="saveVersion"
    >Save</a> -->
</div>
</template>

<script>

import { setCopyText } from '../../../vuex/actions'

export default {
    name: 'editable-copy',
    watchMode: true,
    changeTabTitle: false,
    logHooksToConsole: false,
    props:[
      'instanceNumber', 
      'currentVersion', 
      'nameOfParent', 
      'useHtml', 
      'overideText'
    ],
    data() {
      return {
        names:'text edit Aplic',
        html: this.useHtml,
        editMode: this.$root.settings.editMode,
        parent: this.nameOfParent,
        routePrefix: this.$root.copy.texts[this.$root.baseView][this.findNameOfParent()],
        copyObject:{},
      }
    },

    vuex:{
      actions:{ 
        setCopyText,
      } 
    },

    methods: {
    	// listen for edit to get turned on
    	// if user is allowed to edit
    	// switch field to editable text area
    	// persist vux on update

      persistCopyText(e) {
        this.setCopyText(this.copyObject, [e.target.value, this.parent])
      },

      saveVersion(){
        var that =this
        var data = this.copyObject
        console.log(data.copy);
        this.$http.put('/api/copyText/'+data.id, { data },
          function (data, status, request) {
            console.log("%c saveVersion() in EditableCopy.vue",that.$root.settings.logGood);
        }).error(function (data, status, request) {
          console.log("%c saveVersion() Err in EditableCopy",that.$root.settings.logErr);
        })
      },

      findNameOfParent(){
        if(this.nameOfParent == undefined){
          return this.$parent.name+'_'+this.$parent.id
        }
        return this.nameOfParent
      },
    },

    ready() {
      this.parent = this.findNameOfParent()
      this.$watch('$root.getCopy', function(){
        console.log(this.routePrefix)
        console.log(this.instanceNumber)
        this.copyObject = this.routePrefix[this.instanceNumber]
      }, { deep: true })
    },
  }
</script>

<style lang="stylus">
</style>