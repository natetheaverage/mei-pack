<html>
	<head>
		<title>Home & Gadgets Expo | Application</title>
		<link href="http://homeandgadgetexpo.com/build/css/final.css " rel="stylesheet" type="text/css">

 		<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
		<link href="http://homeandgadgetexpo.com/css/pdf.css " rel="stylesheet" type="text/css">
		
		
	</head>
	<body>
		<div id="vue-container" class="container">

			<!-- PAGE 1 -->
			<div class="page">

				<!-- Header -->
				<section id="Header">
					<div class="blue-bar"></div>
					<!-- Brand -->
					<div class="brand">
						<img class="brand-logo" src="http://homeandgadgetexpo.com/images/logo/frs-logo-blue-full.png">
						<span class="brand-text">
			    		<span>
			    			Home <span class="brand-amp">&amp;</span>
		    			</span><br />
			    		<span class="brand-center highlight">Gadget</span><br />
			    		<span>Expo</span>
						</span>
					</div> <!-- end brand -->

					<h3 class="title">
						{{$event['pdf']['document_title']}}
					</h3>

					<div class="title-note">
						<p>{{$event['pdf']['title_note']}}&nbsp;<span class="highlight">{{$event['pdf']['company_phone']}}</span></p>
					</div>
				</section> <!-- end header -->

				<!-- Event Details -->
				<section id="Event-Details">
					<div class="blue-bar"></div>
					<div class="event-box">
						<div class="event-details third">
							<center><span>
								<b>{{ $event['city'] }}, {{ $event['state'] }}</b>
							</span><br />
							<span>
							<?php 
								$day = strtotime($event['date']);
								print date('M', $day).' '.$event['startDate'];
								print '-'.$event['endDate'].', '.date('Y', $day);
							?>
							</span></center>
						</div>
						<div class="event-address third">
							<center><span>
								<b>{{ $event['venue'] }}</b>
							</span><br />
							<span>
								{{ $event['street'] }}
							</span><br />
							<span>
								{{ $event['city'] }}, {{ $event['state'] }} {{ $event['zip'] }}
							</span></center>
						</div>
						<div class="booth-number quarter float-r">
							<center><span>
								<b>Booth Number</b>
							</span><br />
							<div class="card">
							
							</div></center>
						</div>
					</div>

				</section>

				<!-- Event Details -->
				<section id="Event-Details">			
					<center><h4 class="clear highlight">
						{{$event['pdf']['contact_header']}}
					</h4></center>
					<div class="blue-bar"></div>
					<fieldset class="address-box">
	          <input 
	            name="company_name" 
	            type="text" 
	            class="form-control input-sm" 
	            placeholder="Company Name:"
	            value="{{ $vendor['CompanyName'] }}"
	          />
	          <input 
	            name="street" 
	            type="text" 
	            class="input-sm"
	            placeholder="Street:"
	            value="{{ $vendor['CompanyStreet'] }}"
	           />
	            <input 
	              name="City" 
	              type="text" 
	              class="input-sm" 
	              placeholder="City:"
	              value="{{ $vendor['CompanyCity'] }}"
	            >
	            <div class="third float-l">
		            <input 
		              name="state" 
		              type="text" 
		              class="input-sm" 
		              placeholder="State:"
		              value="{{ $vendor['CompanyState'] }}"
		            >
		          </div>
	            <div class="third float-l">
		            <input 
		              name="zip" 
		              type="text" 
		              class="input-sm" 
		              placeholder="Zip:"
		              value="{{ $vendor['CompanyZip'] }}"
		            >
	            </div>
				    </fieldset> <!-- .address-box -->
				  	<fieldset class="contact-box"> 
		          <input 
	              name="phone" 
	              type="text" 
	              class="input-sm" 
	              placeholder="Phone:"	
	              value="{{ $vendor['CompanyPhone'] }}"
	            >
			        <input 
			          name="email" 
			          type="text" 
			          class="input-sm" 
	              placeholder="Email:"	
	              value="{{ $vendor['CompanyEmail'] }}"
			        >
				      <input 
			          name="website" 
			          type="text" 
			          class="input-sm"
	              placeholder="http://www."	
	              value="{{ $vendor['CompanyUrl'] }}"
				      >
				    </fieldset><!-- .contact-box -->

				    <center>
				    <h4 class="clear highlight">
				    	{{$event['pdf']['details_header']}}
				    </h4>
						<div class="blue-bar"></div>
				    <fieldset class="info-box">
					  	<textarea 
					  		class="form-control" 
					  		name="product-details"
					  		rows="2"
					  		<?php 
					  		if( count($vendor) > 0 ){
					  			print 'value="'.$vendor['CompanyDetails'].'"';
					  		} ?>
					  	></textarea>
						<fieldset class="booth-box">
						<center><h4 class="clear highlight">{{$event['pdf']['booth_header']}}</h4>
						<div class="blue-bar"></div>
						
							<table class="tg">
							<?php 
						  	$subhead = '';
						  	foreach ($event['prices'] as $key => $value) { 
		    					if($value['name'] !== $subhead){
		    							$subhead = $value['name'];
		    							print '<tr><th class="tg-yw4l" colspan="4"><span class="highlight"><b>'.$subhead.'</b></span></th></tr>';
	    						} ?>
						  <tr>
						    <td class="tg-yw4l" width="10" height="20">
						    	<input 
						    		name="inline-count-{{$key}}"
					          type="text" 
					          class="input-sm"
			              placeholder="#"	
			              <?php $amount = 'Booth'.$value['name'].$value['type'].'Count' ?>
			              value="{{ $vendor[$amount] }}"
					      	>
					      </td>
						    <td class="tg-yw4l" width="45%" height="20">
						    	<span>
						    		<?php
						    				print $value['type'].'  $'. $value['price'].'.00 '.$value['description'];
					    			?>
						    	</span>
						    </td>
						    <td class="tg-yw4l" width="17%" height="20">
						    	<small>Line Total:</small>
					    	</td>
						    <td class="tg-yw4l" width="20%" height="20">
						    	<input 
					          name="line_total_{{$key}}" 
					          type="text" 
					          class="input-sm"
			              placeholder="$"	
			              <?php $amount = 'Booth'.$value['name'].$value['type'].'total' ?>
			              value="{{ $vendor[$amount] }}"
					      	>
						    </td>
						  </tr>
						  <?php  };  ?>
						  
						  <tr> 
						  	<td class="tg-yw4l" width="10" height="20"></td>
						    <td class="tg-yw4l" width="45%"  height="20"><small style="float:right"><b>TOTAL (before discounts):</b></small></td>
						    <td class="tg-yw4l" height="20" colspan="2">
						    	<input 
					          name="total_before" 
					          type="text" 
					          class="input-sm"
			              placeholder="$"	
			              value="{{ $vendor['TotalBefore'] }}"
					      	>
						    </td>
						  </tr>

	  					<tr><th class="tg-yw4l" colspan="4"><small class="highlight"><b>Discounts</b></small></th></tr>

	  					<?php foreach ($event['discounts'] as $key => $value) { ?>

						  <tr>
						    <td class="tg-yw4l" width="10">
						    	<input 
						    		type="checkbox"  
						    		class="checkbox" 
						    		style="width: 10px" 
						    		name="discount-{{$key}}"
						    		<?php $discount = $value['name'].'-value' ?>
			              value="{{ $vendor[$discount] }}"
					    		/>
					      </td>
					      
						    <td class="tg-yw4l" width="45%" >
						    	<span>
						    	<?php 
						    		print $value['name'].'  '. $value['amount'].$value['type'].' '.$value['description']; 
						    	?>
						    	</span>
						    </td>
						    <td class="tg-yw4l" height="20"></td>
						    <td class="tg-yw4l" height="20">
						    	<input 
					          name="line_total_{{$key}}" 
					          type="text" 
					          class="input-sm"
			              placeholder="$"	
			              <?php $discount = $value['name'].'-total' ?>
			              value="{{ $vendor[$discount] }}"
					      	>
						    </td>
						  </tr>
						  <?php  };  ?>

						  <tr>
						  	<td class="tg-yw4l" width="10" height="20"></td>
						    <td class="tg-yw4l" width="45%"  height="20">
						    	<span style="float:right"><b>TOTAL :</b></span>
						    </td>
						    <td class="tg-yw4l" height="20" colspan="2">
							    <input 
					          name="total" 
					          type="text" 
					          class="input-sm"
			              placeholder="$"	
			              value="{{ $vendor['Total'] }}"
					      	>
					      </td>
						  </tr>
						</table>
					</fieldset>

					<fieldset class="payment-box">
						<center><h4 class="clear  highlight">{{$event['pdf']['payment_header']}}</h4>
						<div class="blue-bar"></div>
						<table width="100%" class="tg">
							<tr>
								<th class="tg-yw4l" height="20" colspan="2">
									<small class="highlight"><b>Pay By:</b></small>
								</th>
								<!-- <th class="tg-yw4l" height="20" colspan="2">
									<small class="highlight"><b>Bill Me:</b></small>
								</ th>-->
							</tr>
							  <tr>
							    <td class="tg-yw4l" width="4%" height="20">
							    	<input 
								    	type="checkbox"
						    			class="checkbox"  
								    	style="float: right"
								    	name="cc-billing-{{$key}}"
			              	value="{{ $vendor['cc-billing'] }}"
							    	/>
						      </td>
						      <td class="tg-yw4l" width="100%" height="20" colspan="1">
								    	<small>{{$event['pdf']['billing_text_one']}}</small>
							    </td>
							    <!-- <td class="tg-yw4l" width="10%" height="20">
							    	<input 
								    	type="checkbox"
						    			class="checkbox"  
								    	style="float: right"
								    	name="full-billing- $key "
			              	value="  $vendor['full-billing'] "
							    	/>
						      </td>
						      <td class="tg-yw4l" width="40%" height="20">
								    	<small>Full Amount (Total line less 5% pre-Pay discount)</small>
							    </td> -->
							  </tr>

							  <tr>
							    <td class="tg-yw4l" width="4%" height="20">
							    	<div class="form-group">
							    	<input 
								    	type="checkbox" 
								    	class="checkbox" 
								    	style="float: right" 
								    	name="check-billing-{{$key}}"
								    	value="{{ $vendor['check-billing'] }}"
							    	/>
						      </td>
						      <td class="tg-yw4l" width="100%" height="20">
								    	<small>{{$event['pdf']['billing_text_two']}} {{$event['pdf']['company_name']}}</small>
							    </td>
							    <!-- <td class="tg-yw4l" width="5%" height="20">
							    	<input 
								    	type="checkbox"
						    			class="checkbox"  
								    	style="float: right"
								    	name="half-billing-$key"
								    	value=" $vendor['half-billing'] "
							    	/>
						      </td>
						      <td class="tg-yw4l" width="45%" height="20">
								    	<small>50% Down (50% of TOTAL line)</small>
							    </td>-->
							  </tr> 
							  
							  <tr>
							    <td class="tg-yw4l" height="20" colspan="2">
							    	<input 
						          name="card-name"
						          type="text" 
						          class="input-sm"
				              placeholder="Name on Card:"	
				              value="{{ $vendor['BillingName'] }}"
						      	>
							    </td>
							  </tr>

		  					<tr>
							    <td class="tg-yw4l" height="20" colspan="2">
							    	<input 
						          name="card-address"
						          type="text" 
						          class="input-sm"
				              placeholder="Full Address:"	
				              value="{{ $vendor['BillingAddress'] }}"
						      	>
							    </td>
							  </tr>
							  <tr>
							    <td class="tg-yw4l" height="20" colspan="2">
							    	<input 
						          name="card-number"
						          type="text" 
						          class="input-sm"
				              placeholder="Card #:"	
				              value="{{ $vendor['BillingCard'] }}"
						      	>
							    </td>
							  </tr>

							  <tr>
							    <td class="tg-yw4l" height="20" colspan="2">
							    	<input 
						          name="card-exp"
						          type="text" 
						          class="input-sm"
				              placeholder="Exp. Date:"
				              value="{{ $vendor['BillingExp'] }}"
						      	>
							    </td>
							    </tr>
							    <tr>
							    <td class="tg-yw4l" height="20" colspan="2">
							    	<input 
						          name="card-ccv"
						          type="text" 
						          class="input-sm"
				              placeholder="CCV#:"	
				              value="{{ $vendor['BillingCcv'] }}"
						      	>
							    </td>
							  </tr>

							  <tr>
							    <th class="tg-yw4l" style="padding: 0 0 15px 15px; margin: 0; height: 10px;" colspan="2">
							    	<span><small>
							    	{{ $event["pdf"]['signing_auth_one'] }}
							    	{{ $event["pdf"]['company_name'] }}
							    	{{ $event["pdf"]['signing_auth_two'] }}
							   		</small></span>
							   	</th>
							  </tr>
							  <tr>
							    <td class="tg-yw4l" height="20" colspan="2">
							    	<div style="margin: 0; padding: 0; height: 20px;">
								    	<input 
								    		disabled
						          	name="card-sig"
							          type="text" 
							          class="input-sm"
					              placeholder="Signed:"	
							      	>
						      	</div>
							    </td>
							    </tr>
							    <tr>
							    <td class="tg-yw4l" width="3" height="20" colspan="2">
							    	<input 
						          name="card-sig-date"
						          type="text" 
						          class="input-sm"
				              placeholder="Date:"	
				              value="{{ $vendor['Date'] }}"
						      	>
							    </td>
							  </tr>
							</table>
						</fieldset>

						<h4 class="clear highlight">
							{{$event['pdf']['mailto_header']}}
						</h4>
						<div class="blue-bar"></div>
				    <fieldset class="mailto-box full-width"> 
					  	<span><b>
					    	{{ $event["pdf"]['company_name'] }},
					    	{{ $event["pdf"]['company_address'] }}
					    	</b><br />
					    	Fax: <b>{{ $event["pdf"]['company_fax'] }}</b>
								Email: <b>{{ $event["pdf"]['company_email'] }}</b> 
					  	</span>
					  </fieldset><!-- .contact-box -->
						<br />
						<fieldset class="sign-box"> 
					  	<table width="100%" class="tg">
					  	<tr>
								<th class="tg-yw4l" height="10" colspan="4">
									<span>{{ $event["pdf"]['payment_terms'] }}</span>
									<br /><br />
									<span>{{ $event["pdf"]['signing_terms'] }}</span>
								</th>
							</tr>
							<tr>
								<th class="tg-yw4l" height="10" colspan="2">
									<input 
					          style="height: 15px;"
						        name="contract-company"
					          type="text" 
					          class="input-sm"
					          value="{{ $vendor['date'] }}"
					      	><label>Exhibitor (Company Name)</label>
								</th>
								<th class="tg-yw4l" height="20" colspan="2">
									<input 
										disabled
					          style="height: 15px;"
						        name="contract-sig"
					          type="text" 
					          class="input-sm"
					      	><label>Authorized Signature</label>
								</th>
							</tr>
							 <tr>
								<th class="tg-yw4l" height="20" colspan="2">
									<input 
					          style="height: 15px;"
						        name="contract-date"
					          type="text" 
					          class="input-sm"
					          value="{{ $vendor['date'] }}"
					      	><label>Date</label>
								</th>
								<th class="tg-yw4l" height="20" colspan="2">
									<input 
					          style="height: 15px;"
						        name="contract-name"
					          type="text" 
					          class="input-sm"
					      	><label>Print Name and Title</label>
								</th>
							</tr>
						</table>
					</fieldset>
			</div><!-- .page 1 -->

				<!-- PAGE 2 -->
			<div class="page">
				<!-- Header -->
				<section id="Header">
					<div class="blue-bar"></div>
					<!-- Brand -->
					<div class="brand">
						<img class="brand-logo" src="http://homeandgadgetexpo.com/images/logo/frs-logo-blue-full.png">
						<span class="brand-text">
			    		<span>
			    			Home <span class="brand-amp">&amp;</span>
		    			</span><br />
			    		<span class="brand-center highlight">Gadget</span><br />
			    		<span>Expo</span>
						</span>
					</div> <!-- end brand -->

					<center><h3 class="highlight">
							{{$event['pdf']['rules_header']}}
					</h3>

			  	<h5 class="highlight">
			  		<b>{{ $event["pdf"]['rules_sub_header'] }}</b>
		  		</h5></center>
					<div class="blue-bar"></div>
				</section>

		    <fieldset class="rules-box"> 
		    	
			    	{{ $event["pdf"]['rules'] }}
			    
			  </fieldset> 
			</div> <!-- end page 2 -->
		</div>  <!-- end .container -->
		
		<script src="http://homeandgadgetexpo.com/js/jquery.js"></script>
		<script src="http://homeandgadgetexpo.com/js/bootstrap.min.js"></script>
		<script src="http://homeandgadgetexpo.com/js/main.js"></script>
			
	</body>
</html>