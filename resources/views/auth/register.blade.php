@extends('layouts.auth')
@section('title', 'Register')
@section('content')
<div class="cls-content">
  <div class="cls-content-lg panel">
      <div class="panel-heading">
        <p class="pad-top mar-btm">So you wantRegister</p>
      </div>
      <div class="panel-body">
        <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
        <div class="row">
          <div class="col-sm-6">
              {!! csrf_field() !!}

            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-male"></i></div>
                <input type="text" class="form-control" name="name" value="{{ old('name') }}">

                @if ($errors->has('name'))
                  <span class="help-block">
                    <strong>{{ $errors->first('name') }}</strong>
                  </span>
                @endif
              </div>
            </div>

            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                  <input type="email" class="form-control" name="email" value="{{ old('email') }}">

                @if ($errors->has('email'))
                  <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                  </span>
                @endif
              </div>
            </div>
          </div> <!-- col-md-6 -->
          <div class="col-sm-6">
              <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                  <input type="password" class="form-control" name="password">

                  @if ($errors->has('password'))
                    <span class="help-block">
                      <strong>{{ $errors->first('password') }}</strong>
                    </span>
                  @endif
                </div>
              </div>

                <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                  <input type="password" class="form-control" name="password_confirmation">

                  @if ($errors->has('password_confirmation'))
                    <span class="help-block">
                      <strong>{{ $errors->first('password_confirmation') }}</strong>
                    </span>
                  @endif
                </div>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-xs-8 text-left checkbox">
                <label class="form-checkbox form-icon">
                  <input type="checkbox"> I agree with the <a href="{{ url('/terms-and-conditions') }}" class="btn-link">Terms and Conditions</a>
                </label>
              </div>
              <div class="col-xs-4">
                <div class="form-group text-right">
                  <button class="btn btn-success text-uppercase" type="submit">Sign Up</button>
                </div>
              </div>
            </div>
            <div class="mar-btm"><em>- or -</em></div>
            <button class="btn btn-primary btn-lg btn-block" type="button">
              <i class="fa fa-facebook fa-fw"></i> Sign Up with Facebook
            </button>
          </form>
        </div>
      </div>
      <div class="pad-ver">
        Already have an account ? <a href="{{ url('/login') }}" class="btn-link mar-rgt">Sign In</a>
      </div>
    </div>
  </div>
</div>
@endsection
