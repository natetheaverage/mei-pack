{{-- 
front is the public facing site authentication not required 
config('app.theme') pull theme from the env file
home should probably be called index but i am an idiot sometimes
--}}

@include('front.'.config('app.theme').'.index')
