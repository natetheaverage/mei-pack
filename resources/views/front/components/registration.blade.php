<form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Registration</legend>

<!-- Multiple Checkboxes -->
<div class="form-group">
  <label class="col-md-4 control-label" for="city-select">Cities you are applying for</label>
  <div class="col-md-4">
  <div class="checkbox">
    <label for="city-select-0">
      <input type="checkbox" name="city-select" id="city-select-0" value="Greely">
      Greely
    </label>
    </div>
  <div class="checkbox">
    <label for="city-select-1">
      <input type="checkbox" name="city-select" id="city-select-1" value="Colorado Springs">
      Colorado Springs
    </label>
    </div>
  <div class="checkbox">
    <label for="city-select-2">
      <input type="checkbox" name="city-select" id="city-select-2" value="Grand Junction">
      Grand Junction
    </label>
    </div>
  <div class="checkbox">
    <label for="city-select-3">
      <input type="checkbox" name="city-select" id="city-select-3" value="Denver">
      Denver
    </label>
    </div>
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="company_name"></label>  
  <div class="col-md-4">
  <input id="company_name" name="company_name" type="text" placeholder="Company Name" class="form-control input-md" required="">
  <span class="help-block">Company</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="street"></label>  
  <div class="col-md-4">
  <input id="street" name="street" type="text" placeholder="Address" class="form-control input-md" required="">
  <span class="help-block">address</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="City"></label>  
  <div class="col-md-4">
  <input id="City" name="City" type="text" placeholder="City" class="form-control input-md" required="">
  <span class="help-block">city</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="state"></label>  
  <div class="col-md-2">
  <input id="state" name="state" type="text" placeholder="State" class="form-control input-md" required="">
  <span class="help-block">state</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="zip"></label>  
  <div class="col-md-2">
  <input id="zip" name="zip" type="text" placeholder="Zip" class="form-control input-md" required="">
  <span class="help-block">zip</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="phone"></label>  
  <div class="col-md-4">
  <input id="phone" name="phone" type="text" placeholder="Phone" class="form-control input-md" required="">
  <span class="help-block">phone</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="email"></label>  
  <div class="col-md-4">
  <input id="email" name="email" type="text" placeholder="Email" class="form-control input-md" required="">
  <span class="help-block">email</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="website"></label>  
  <div class="col-md-4">
  <input id="website" name="website" type="text" placeholder="Website" class="form-control input-md">
  <span class="help-block">website</span>  
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="products">Products or Services being exhibited<br> (please discribe)</label>
  <div class="col-md-4">                     
    <textarea class="form-control" id="products" name="products"></textarea>
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="corner_booth">Corner Booth<br> ($900 ea.)</label>
  <div class="col-md-2">
    <select id="corner_booth" name="corner_booth" class="form-control">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="standard_booth">Standard Booth<br> ($750 ea.)</label>
  <div class="col-md-2">
    <select id="standard_booth" name="standard_booth" class="form-control">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="booth_power">110V Electrical<br> ($75 ea.)</label>
  <div class="col-md-2">
    <select id="booth_power" name="booth_power" class="form-control">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
</div>

<!-- Multiple Checkboxes -->
<div class="form-group">
  <label class="col-md-4 control-label" for="pre_pay">Pre-Pay Total </label>
  <div class="col-md-4">
  <div class="checkbox">
    <label for="pre_pay-0">
      <input type="checkbox" name="pre_pay" id="pre_pay-0" value="1">
      5% Discount
    </label>
    </div>
  </div>
</div>

</fieldset>
</form>
