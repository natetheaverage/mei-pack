<!DOCTYPE html>
<html>
    <head>
        @include('includes.head')
    </head>
    <body id="mail" class="mail-room">
    <header id="header">
        @include('partials.navbar') 
    </header><!--/header-->

        <ul class="mail-list">
        <li ><h1>{{$msg->count()}} Messages</h1></li>
            @foreach($msg as $message)
            <div class="mail-btn-group btn-group">
                <a href="mail/{{ $message->id }}"  class="btn btn-primary mail-resend"><i class="fa fa-envelope"></i></a>
                <a href="mail/destroy/{{ $message->id }}"  class="btn btn-danger mail-delete">X</a>
            </div>
            <li class="mail-item">
                <div class="mail-item-id">ID: {{ $message->id }}</div>
                <div class="mail-item-name">Name: {{ $message->name }}</div>
                <div class="mail-item-email">Email: {{ $message->email }}</div> 
                <div class="mail-item-subject">Subject: {{ $message->subject }}</div>
                <div class="mail-item-date">{{ $message->created_at }}</div>
                <div class="mail-item-message">Message: {{ $message->message }}</div>
            </li>
            @endforeach
        </ul>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    
    <script src="js/main.js"></script>
    
    <script src="//static.getclicky.com/js" type="text/javascript"></script>
    <script type="text/javascript">try{ clicky.init(100843123); }catch(e){}</script>
    
    </body>
</html>