@extends('layouts.auth')

<!-- Main Content -->
@section('content')

<!-- PASSWORD RESETTING FORM -->
<!--===================================================-->
<div class="cls-content">
    <div class="cls-content-sm panel">
        <div class="panel-body">
        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif

            <p class="pad-btm">Enter your email address to recover your password. </p>
             <form class="form-horizontal" role="form" method="POST" action="{{ url('/password/email') }}">
                        {!! csrf_field() !!}

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
                <div class="form-group text-right">
                    <button class="btn btn-success text-uppercase" type="submit">Reset Password</button>
                </div>
            </form>
        </div>
    </div>
    <div class="pad-ver">
        <a href="{{ url('/login') }}" class="btn-link mar-rgt">Back to Login</a>
    </div>
</div>

               
                  
@endsection
