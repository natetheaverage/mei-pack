<template>
  <div class="editable-copy">
    <span 
      v-if="!editMode & html" 
      v-html="copyObject.copy"
      style="width:100%"
	  ></span>
    <span 
      v-if="!editMode & !html" 
      v-text="copyObject.copy"
      style="width:100%"
    ></span> 
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
        html: false,
        editMode: this.$root.pubSettings.editMode,
        parent: this.nameOfParent,
        routePrefix: this.$parent.copy.texts[this.$root.baseView],
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
        this.setCopyText(this.copyObject, e.target.value)
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

      // findParentName(){
      //   if(this.nameOfParent == undefined){
      //     return this.$parent.name+'_'+this.$parent.id
      //   }
      //   return this.nameOfParent+'_0'
      // },
    },

    ready() {
      this.copyObject = this.routePrefix[this.instanceNumber - 1]
      this.$watch('$parent.getCopy', function(){
        this.copyObject = this.routePrefix[this.instanceNumber - 1]
        }, 
        { deep: true }
      )
    },
  }
</script>

<style lang="stylus">
</style>