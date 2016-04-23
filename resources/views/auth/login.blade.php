@extends('layouts.auth')
@section('title', 'Login')
@section('content')
<!-- LOGIN FORM -->
<!--===================================================-->
<!-- <div class="container"> -->
  <!-- <div class="row"> -->
    <div class="cls-content">
      <div class="cls-content-sm panel">
        <div class="panel-heading">
          <p class="pad-top mar-btm"><b>Login</b> and stay delicious!</p>
        </div>
          <div class="panel-body">
            <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                {!! csrf_field() !!}

              <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-user"></i>
                  </div>
                  <input type="email" class="form-control" name="email" value="{{ old('email') }}">

                  @if ($errors->has('email'))
                  <span class="help-block">
                      <strong>{{ $errors->first('email') }}</strong>
                  </span>
                  @endif
                </div>
              </div>

              <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-asterisk"></i>
                    </div>
                  <input type="password" class="form-control" name="password">

                  @if ($errors->has('password'))
                    <span class="help-block">
                      <strong>{{ $errors->first('password') }}</strong>
                    </span>
                  @endif
                </div>
              </div>
              <div class="row">
                <div class="col-xs-8 text-left checkbox">
                  <label class="form-checkbox form-icon">
                  <input type="checkbox"  name="remember"> Remember me
                  </label>
                </div>
                <div class="col-xs-4">
                  <div class="form-group text-right">
                  <button class="btn btn-success text-uppercase" type="submit">Sign In</button>
                  </div>
                </div>
              </div>
            </form>
            <div class="mar-btm"><em>- or -</em></div>
            <button class="btn btn-primary btn-lg btn-block" type="button">
              <i class="fa fa-facebook fa-fw"></i> Login with Facebook
            </button>
          </div>
        </div>
        <div class="pad-ver">
          <a class="btn btn-link" href="{{ url('/password/reset') }}">Forgot Your Password?</a>
          <a class="btn btn-link" href="{{ url('/register') }}">Register?</a>
        </div>
      </div>
    </div>
  <!-- </div> -->
<!-- </div> -->
@endsection
