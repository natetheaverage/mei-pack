<footer id="Footer">
  <div class="pad-all-lg">
    <div class="row">
      <div class="col-sm-6">
        <p v-html="'&copy; '+company.name"></p>
        <p>Designed by <a target="_blank" href="http://www.natetheaverage.com/" title="Dream Alchemist, Keep Bouncing & Stay Delicious">NateTheAverage</a></p>
        @hasrole('admin')
          <a class="mtrl-btn mtrl-raised mtrl-blue" href="auth/logout">  
            <i class="fa fa-unlock"></i>
          </a>
        @else
          <a class="mtrl-btn mtrl-raised mtrl-blue" href="auth/login">  
            <i class="fa fa-lock"></i>
          </a>
        @endrole
        <!-- <mei-admin-login></mei-admin-login> -->
        
      </div>
      @include('front.partials.contact.social')
    </div> 
    
  </div>
</footer><!--/#footer-->