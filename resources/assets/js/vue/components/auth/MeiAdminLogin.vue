<template>
  <div class="MeiAdminLogin">
    <a class="mtrl-btn mtrl-raised mtrl-blue" v-on:click="login">  
      <i class="fa" :class="$root.settings.loggedIn ? 'fa-unlock' : 'fa-lock'"></i>
    </a>

    <div class="login-overlay" v-if="loginOn" v-on:click="login"></div>
		
		<div 
			class="mtrl-raised bg-purple login-modal"
			v-if="loginOn" 
		>

		  <!-- LOGIN FORM -->
			<!--===================================================-->
			<div class="cls-content" v-if="loginOn">
				<div class="cls-content-sm panel">
					<div class="panel-body">
						<p class="pad-btm">Sign In to your account</p>
						<!-- @if (count($errors) > 0)
							<div class="alert alert-danger">
								<strong>Whoops!</strong> There were some problems with your input.<br><br>
								<ul>
									@foreach ($errors->all() as $error)
										<li>{{ $error }}</li>
									@endforeach
								</ul>
							</div>
						@endif -->



						<!-- <form class="form-horizontal" role="form" method="POST" action="/auth/login"> -->
						<form class="form-horizontal" role="form">
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon"><i class="fa fa-user"></i></div>
									<input 
										id="email" 
										type="text" 
										name="email" 
										:value="oldName" 
										class="form-control" 
										placeholder="Email"
										v-model="loginData.email"
									>
								</div>
							</div>

							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
									<input 
										id="password" 
										type="password" 
										class="form-control" 
										name="password" 
										placeholder="Password"
										v-model="loginData.password"
									>
								</div>
							</div>

							<div class="row">
								<div class="col-xs-8 text-left checkbox">
									<!-- <label class="form-checkbox form-icon">
										<input type="checkbox" > Remember me
									</label> -->
								</div>
								<div class="col-xs-4">
									<div class="form-group text-right">
										<button 
											class="btn btn-success text-uppercase" 
											name="submit" 
											type="submit"
											v-on:click="submitLogin"
										>Sign In</button>
									</div>
								</div>
							</div>
							<!-- <div class="mar-btm"><em>- or -</em></div>
							<button class="btn btn-primary btn-lg btn-block" type="button">
								<i class="fa fa-facebook fa-fw"></i> Login with Facebook
							</button> -->
						</form>

					</div>
				</div>
				<div class="pad-ver">
					<a href="password-reminder" class="btn-link mar-rgt">Forgot password ?</a>
					<a href="register" class="btn-link mar-lft">Create a new account</a>
				</div>
		</div>
 </div>
</template>

<script>
export default {
    name: 'MeiAdminLogin',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	loginOn: false,
      	loginData: {
            email: null,
            password: null,
            memory: false
        },
      }
    },

    methods: {
    	login(){
    		this.loginOn = !this.loginOn 
    	},
    },

    ready() {

    }
  }
</script>

<style lang="stylus">
.login-overlay
	width 100%
	height 100%
	position fixed
	top 0
	right 0
	z-index 999999
	background-color rgba(103, 58, 183, 0.5);
.login-modal
	padding 15px
	position fixed
	top 0
	right 0
	z-index 9999999
	// height 100%
	// width 100%
@media (min-width 568px)
	.login-modal
		padding 15px
		position fixed
		top 120px
		right 25%
		left 25%
		max-height 580px
		max-width 490px
</style>