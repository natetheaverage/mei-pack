
<template>
<div id="{{ object.id }}-form-holder" style="display:none"> 
    <form 
        id="object-{{ object.id }}-editing-form" 
        action="/interfaceObject/{{object.id}}" 
        method="POST"
    >
        <!-- // <input type="hidden" name="_method" value="PUT"> -->
        <!-- // <input type="hidden" name="_token" value="{{ csrf_token() }}"> -->
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
                        <input class="form-control input-lg" type="text" name="label" v-model="object.label" />
                    </label>
                    <label> Button Name                 
                        <input class="form-control input-lg" type="text" name="name" v-model="object.name">
                    </label>
                    <label> Button URL                 
                        <input class="form-control input-lg" type="text" name="href" v-model="object.href">
                    </label>
                    <label> Button icon
                        <div class="input-group">
                            
                            <select 
                              name="icon" 
                              data-placeholder="{{object.icon}}" 
                              id="selectpicker-{{object.id}}"  
                              data-live-search="true"
                              v-html="iconList.iconList"
                              >
                            <!-- // {{-- this will prob be a problem --}} -->
                                
                            </select>
                            <i id="chosen-fa-icon-{{object.id}}" class="pad-lft fa fa-3x {{object.icon}}"></i>
                        </div> 
                    </label>
                    <label v-show="editAll">  Button Family
                        <input class="form-control input-lg" type="text" dname="family" v-model="object.family">
                    </label>
                    <label v-show="editAll"> Button Type
                        <input class="form-control input-lg" type="text" name="type" v-model="object.type">
                    </label>
                </div>
                <div class="col-sm-6">
                    <label> Button  Menu ID
                        <input class="form-control input-lg" type="text" name="menu_id" v-model="object.menu_id">
                    </label>
                    <label> Button Menu Name
                    <input class="form-control input-lg" type="text" name="menu_name" v-model="object.menu_name">
                    </label>
                    <label> Button Menu Order
                        <input class="form-control input-lg" type="text" name="menu_order" v-model="object.menu_order">
                    </label>
                    <label v-show="editAll"> Button Owner ID
                        <input class="form-control input-lg" type="text" name="owner_id" v-model="object.owner_id">
                    </label>
                    <label v-show="editAll"> Button Owner Type 
                        <input class="form-control input-lg" type="text" name="owner_type" v-model="object.owner_type">
                    </label>
                    <label v-show="editAll"> Button Value
                        <input class="form-control input-lg" type="text" name="value" v-model="object.value">
                    </label>
                    
                </div>
            </div>
        </div>
    </form>
</div>

</template>

<script>
export default { 

    props: ['object'],

    data() {
      return {
        iconList: require('./iconListForSelectBox'),
        editAll: true,
      }
    },
    computed: {
      
    },
    methods: {
      
    },
}
</script>
<style>
</style>
