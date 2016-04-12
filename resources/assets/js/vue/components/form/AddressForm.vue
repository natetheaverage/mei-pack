<template>
  <fieldset class="address-box">
        <!-- Form Name -->
        <legend>Address</legend>
        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-3 control-label" for="company_name">Company Name</label>  
          <div class="col-md-9">
            <input 
              name="company_name" 
              type="text" 
              class="form-control input-md" 
              v-model="companyName" 
            />
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-3 control-label" for="street">Address</label>  
          <div class="col-md-9">
            <input 
              id="street" 
              name="street" 
              type="text" 
              class="form-control input-md"
              v-model="street"
              >  
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-3 control-label" for="City">City</label>  
          <div class="col-md-9">
            <input 
              id="City" 
              name="City" 
              type="text" 
              class="form-control input-md" 
              v-model="city"
            >  
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-3 control-label" for="state">State</label>  
          <div class="col-md-2">
            <input id="state" 
                name="state" 
                type="text" 
                class="form-control input-md" 
                v-model="state">
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-2 control-label" for="zip">Zip</label>  
          <div class="col-md-2">
            <input id="zip" 
              name="zip" 
              type="text" 
              lass="form-control input-md" 
              required=""> 
        </div>
      </div>
    </fieldset> <!-- .address-box -->
</template>
<script>
export default {
  name: 'addressform'
}
</script>
<style lang='stylus'>
</style>