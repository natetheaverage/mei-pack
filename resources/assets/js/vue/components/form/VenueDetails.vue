<template>
	<div>
    <!-- Select Basic -->
    <div class="form-group">
      <div class="amount-select">
        <label class="control-label" for="standerd_booth">Standerd Booth<br> (${{standerdPrice}} ea.)</label>
        <input 
            type="number"
            min="0"
            max="9"
            v-model="standerdBooth" 
            name="standerd_booth" 
            class="form-control booths" 
        />
      </div>
    </div>

    <!-- Select Basic -->
    <div class="form-group ">
      <div class="amount-select">
      <label class="control-label" for="corner_booth">Corner Booth<br> (${{cornerPrice}} ea.)</label>
        <input 
          type="number"
          min="0"
          max="9"
          v-model="cornerBooth" 
          name="corner_booth" 
          class="form-control booths" 
        />
      </div>
    </div>

  <!-- Select Basic -->
  <div class="form-group">
    <div 
      v-if="!denver" 
      class="amount-select"
    >
      <label 
          class="control-label" 
          for="electrical"
      >110V Electrical<br> ($75 ea.)</label>
      <input 
          type="number"
          min="0"
          max="9"
          v-model="electrical" 
          name="electrical" 
          class="form-control booths" 
      />
      </div>
      <div 
        v-if="denver" 
        class="amount-select"
      >
        <a 
          class="btn btn-primary" 
          href="/files/DenverExpoExtrasPack.zip"
        >Download Denver Extras Pack</a>
      </div>
    </div>
	</div>

	<div>
	    <span v-if="denver">Denver (+ $100 ea.): <u>${{denverTotal.toFixed(2)}}</u></span>
	    <span>Standerd Booth Total: <u>${{standerdTotal.toFixed(2)}}</u></span>
	    <span>Corner Booth Total: <u>${{cornerTotal.toFixed(2)}}</u></span>
	    <span>Electrical Total: <u>${{electricalTotal.toFixed(2)}}</u></span>
	</div>
</template>
<script>
export default {
		name: 'venue_details',
		data: function(){
			return{
				cornerBooth:0,
			}
		},
	}
</script>
<style lang="stylus">
.booths
    width 70px
</style>