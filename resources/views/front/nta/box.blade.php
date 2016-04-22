
<div class="header">
    <header>

        @include('includes.navbar')        
         
    </header>{{--header end --}}  
</div>
<div class="container">
    <div class="content">
      
        @foreach($m as $m_id => $mail)
            <h1>{!! $m_id !!}</h1>
            @foreach($mail as $key => $p)
                <span>{!! $key !!}: {!! $p !!}</span><br /> 
            @endforeach 
            
            <!-- {{--

                --}} -->
            <br />
            <br />
        @endforeach

      

    </div>
</div>
