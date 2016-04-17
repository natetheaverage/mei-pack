<footer id="Footer">
  <div class="pad-all-lg">
    <div class="row">
      <div class="col-sm-6">
        <p>&copy; 2016 20/20 Investments</p>
        <p>Designed by <a target="_blank" href="http://www.natetheaverage.com/" title="Dream Alchemist, Keep Bouncing & Stay Delicious">NateTheAverage</a></p>
        <button class="btn btn-info" v-on:click="login">  
            <i class="fa" :class="settings.loggedIn ? 'fa-unlock' : 'fa-lock'"></i></button>
      </div>
    </div> 
    @include('front.partials.contact.social')
  </div>

 
    </footer><!--/#footer-->