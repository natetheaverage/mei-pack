<template>
  <div>
    <span>Number of Shows: <u>{{showCount}}</u></span>
    <span>Pre-Discount Total: <u>${{beforeDiscountsTotal.toFixed(2)}}</u></span>
  </div>
  <div>
    <!-- Multiple Checkboxes -->
    <div class="form-group ">
      <label class="control-label" for="pre_pay">Discounts </label>

      <div class="checkbox">
        <label for="pre_pay-0">
        <input 
          type="checkbox" 
          name="pre_pay" 
          id="pre_pay-0" 
          v-model="prePay">
          Pre-Pay <span v-show="prePay">5%</span>
        </label>
      </div>
      <div class="checkbox">
        <label for="multi_booth-0">
        <input 
          type="checkbox" 
          name="multi_booth" 
          id="multi_booth-0" 
          v-model="multiBooth" 
          disabled>
          Multi Booth <span v-show="multiBooth">5%</span>
        </label>
      </div>
      <div class="checkbox">
        <label for="multi_booth-0">
        <input 
          type="checkbox" 
          name="multi_booth" 
          id="multi_booth-0" 
          v-model="multiShow" 
          disabled
        >Multi Show <span v-show="multiShow">5%</span>
        </label>
      </div>
    </div>
    <div>
      <span>Total:<u>${{fullTotal.toFixed(2)}}</u></span>
      <br>
      <span>Savings:<u>${{fullDiscount.toFixed(2)}}</u></span>
    </div>

</template>
<script>
export default {
  name: 'optionsform'
}
</script>
<style lang='stylus'>
</style>