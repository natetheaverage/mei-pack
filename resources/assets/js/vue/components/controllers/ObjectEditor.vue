<template>
<div 
  id="{{ object.id }}-form-holder" 
  style="display:none"
> 
  <form 
    id="object-{{ object.id }}-editing-form" 
  >
    <!-- method="POST" -->
    <!-- action="/api/interfaceObject/{{object.id}}"  -->
    <!-- <input type="hidden" name="_method" value="PUT"> -->
    <!-- <input type="hidden" name="_token" value="{{ csrf_token() }}"> -->
    <input type="hidden" id="id" name="id" value="{{ object.id }}">
    <div class="row">
      <div class="col-sm-12">
        <div class="col-sm-6">
          <h5>Parent ID: {{ object.menu_id }}</h5>
        </div>
        <div class="col-sm-6">
          <h5>Parent Menu: {{ object.menu_name }}</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="col-sm-6">
          <label> Button Label
            <input 
              class="form-control input-lg" 
              type="text" 
              name="label" 
              @input="persistObject | debounce 500"
              :value="object.label" 
            /></label>
          <label> Button Name                 
            <input 
              class="form-control input-lg" 
              type="text" 
              name="name" 
              @input="persistObject | debounce 500"
              :value="object.name"
            ></label>
          <label> Button URL                 
            <input 
              class="form-control input-lg" 
              type="text" 
              name="href" 
              @input="persistObject | debounce 500"
              :value="object.href"
            /></label>
          <label> Button icon
            <div class="input-group">
              <select 
                name="icon" 
                data-live-search="true"
                :data-placeholder="object.icon" 
                :id="'selectpicker-'+object.id"  
                v-html="iconList.default.iconList"
                >
              <!-- // {{-- this will prob be a problem --}} -->
                  
              </select>
              <i 
                :id="'chosen-fa-icon-'+object.id" 
                :class="'pad-lft fa fa-3x ' + object.icon"
              ></i>
            </div> 
          </label>
          <label v-show="editAll">  Button Family
            <input 
              class="form-control input-lg" 
              type="text" 
              dname="family" 
              @input="persistObject | debounce 500"
              :value="object.family">
          </label>
          <label v-show="editAll"> Button Type
            <input 
              class="form-control input-lg" 
              type="text" 
              name="type" 
              @input="persistObject | debounce 500"
              :value="object.type">
          </label>
        </div>
        <div class="col-sm-6">
          <label> Button  Menu ID
            <input 
              class="form-control input-lg" 
              type="text" 
              name="menu_id" 
              @input="persistObject | debounce 500"
              :value="object.menu_id">
          </label>
          <label> Button Menu Name
          <input 
            class="form-control input-lg" 
            type="text" 
            name="menu_name" 
            @input="persistObject | debounce 500"
            :value="object.menu_name">
          </label>
          <label> Button Menu Order
            <input 
              class="form-control input-lg" 
              type="text" 
              name="menu_order" 
              @input="persistObject | debounce 500"
              :value="object.menu_order">
          </label>
          <label v-show="editAll"> Button Owner ID
            <input 
              class="form-control input-lg" 
              type="text" 
              name="owner_id" 
              @input="persistObject | debounce 500"
              :value="object.owner_id">
          </label>
          <label v-show="editAll"> Button Owner Type 
            <input 
              class="form-control input-lg" 
              type="text" 
              name="owner_type" 
              @input="persistObject | debounce 500"
              :value="object.owner_type">
          </label>
          <label v-show="editAll"> Button Value
            <input 
              class="form-control input-lg" 
              type="text" 
              name="value" 
              @input="persistObject | debounce 500"
              :value="object.value">
          </label>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import { setObject } from '../../../vuex/actions'
export default { 

    props: ['object'],

    data() {
      return {
        iconList: require('../../../api/data/iconListForSelectBox'),
        editAll: true,
      }
    },
    vuex:{
        actions:{ 
            setObject
        } 
    },
    computed: {
      
    },
    methods: {
      persistObject(e){
        var field = e.target.name
        var value = e.target.value
        //this.object[field] = value
        console.log(this.object.id)
        this.setObject(this.object, field, value)
      },
      saveObject(){
        var that =this
        this.$root.objectResource.update(
          {objectType:"interfaceObjects", objectOptions: this.object},
          function (menu, status, request) {
            console.log("%csaveObject() menu data persisted in ObjEditor",this.settings.logGood);
            //that.setMenu('DashboardMenu', menu);
        }).error(function (data, status, request) {
          console.log("%c csaveObject() Errrrrr in ObjEditor",this.$root.logErr);
        })
      },
      
    },
}
</script>
<style>
</style>
