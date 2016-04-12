<footer id="footer">
  <div class="pad-all">
    <div class="row">
      <div class="col-sm-6">
        <p>&copy; 2016 {{!!$app['company']!!}}</p>
        <p>Designed by <a target="_blank" href="http://www.natetheaverage.com/" title="Dream Alchemist, Keep Bouncing & Stay Delicious">NateTheAverage</a></p>
        <button class="btn btn-info" @click="adminLogin">
            <i class="fa" :class="loggedIn ? 'fa-unlock' : 'fa-lock'"></i></button>
      </div>
    </div>
    @include('front.partials.contact.social')
  </div>

 
    </footer><!--/#footer-->