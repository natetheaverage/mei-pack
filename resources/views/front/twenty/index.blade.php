@extends('layouts.grail')
@section('title', 'Welcome')

@section('content')
    @parent

    @include('front.'.config('app.theme').'.home')

@endsection
