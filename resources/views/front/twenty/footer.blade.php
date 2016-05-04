<footer id="Footer">
  <div class="pad-all-lg">
    <div class="row">
      <div class="col-sm-4">
        <p v-html="'&copy; '+company.name"></p>
        <p>Designed by <a target="_blank" href="http://www.natetheaverage.com/" title="Dream Alchemist, Keep Bouncing & Stay Delicious">NateTheAverage</a></p>
        @hasrole('admin')
          <a class="mtrl-btn mtrl-raised mtrl-blue" href="/logout">  
            <i class="fa fa-unlock"></i>
          </a>
        @else
          <a class="mtrl-btn mtrl-raised mtrl-blue" href="/login">  
            <i class="fa fa-lock"></i>
          </a>
        @endrole
        <!-- <mei-admin-login></mei-admin-login> -->
        
      </div>
      <div class="col-sm-4">
        <center>
          <a 
            class="mtrl-raised" 
            href="https://itunes.apple.com/us/app/20-20-investing/id1106422899"
          ><img src="/images/twenty/app-store.png" /><br />
          </a>
        </center>
      </div>
      <div class="col-sm-4">
      @include('front.partials.contact.social')
      </div>
    </div> 
  </div>
</footer><!--/#footer-->