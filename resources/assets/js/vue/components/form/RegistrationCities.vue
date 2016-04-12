<template>
	<fieldset class="header-box">
    <!-- Form Name -->
    <legend>Event Selection</legend>
    <!-- Multiple Checkboxes -->
    <div class="form-group form-inline">
      <label class="col-md-3 control-label" for="city-select">Events you are applying for:</label>
      <div class="col-md-9">
        <div 
          class="checkbox"
          v-for="(key, event) in $root.truth.events"
        >
          <label :for="'city-select-'+key">
            <input 
              type="checkbox" 
              name="city-select" 
              :id="'city-select-'+key" 
              v-model="event.selected" 
              @click="updateForm"
            >{{event.name}}
          </label>
        </div>
      </div>
    </div>
  </fieldset> 
</template>

<script>
export default {
	name: 'registrationcities',
  methods:{
    updateForm(){

    },
  }
}
</script>

<style lang="stylus">
.checkbox
  padding 0 10px
  input 
    margin 5px

</style>