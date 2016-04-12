<template>
  <fieldset class="contact-box"> 
      <!-- Form Name -->
      <legend>Contact Info</legend>
      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-2 control-label" for="phone">Phone</label>  
        <div class="col-md-10">
          <input id="phone" 
              name="phone" 
              type="text" 
              class="form-control input-md" required="">
        </div>
      </div>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-2 control-label" for="email">Email</label>  
        <div class="col-md-10">
        <input id="email" 
          name="email" 
          type="text" 
          class="form-control input-md" required="">
        </div>
      </div>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-2 control-label" for="website">Wesite</label>  
        <div class="col-md-10">
        <input 
          id="website" 
          name="website" 
          type="text" 
          class="form-control input-md"
        >
        </div>
      </div>
    </fieldset><!-- .contact-box -->
</template>
<script>
export default {
  name: 'contactsform'
}
</script>
<style lang='stylus'>
</style>