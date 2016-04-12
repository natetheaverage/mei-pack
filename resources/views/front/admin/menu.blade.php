@extends('admin')
@section('title', 'Admin')

@section('content')
    @parent

    <header id="header">
        @include('partials.navbar') 
    </header><!--/header-->
    
    <ul>
    <li>
    <a href="/mail">Mailbox</a>
    </li>
    <li>
    <a href="/admin/featured-vendors">Featured Vendors</a>
    </li>
    <li>
    <a href="#">????</a>
    </li>
    </ul>


@endsection