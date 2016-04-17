<div class="container-wrapper">
  <div class="container">
      <div class="col-md-6 col-sm-offset-2">
        @include('front.partials.contact.quick-form')
      </div>
      <div class="col-sm-4">
        <div class="contact-form">
          <h3>Contact Us</h3>
          <address>
            <strong v-text="company.name"></strong>
            <br>
            <div v-if="company.addresses[0].active" >
              <span v-text="company.addresses[0].street">
              Street address </span>
              <span v-text="company.addresses[0].unit"
              >Unit# </span>
              <br>
              <span  v-text="company.addresses[0].city">city</span>, 
              <span  v-text="company.addresses[0].state">state</span>, 
              <span  v-text="company.addresses[0].zip">zip</span>
            </div>
            <div v-if="company.contacts.emails[0].active" >
              <br>
              Email:
              <a target="_blank" :href="'mailto:'+company.contacts.emails[0].emailAddress">
                <span  v-text="company.contacts.emails[0].emailAddress">email 0</span>
              </a>
            </div>
            <div v-if="company.contacts.phone[0].active" >
              <br>
              <abbr title="Phone">
                <span v-text="company.contacts.phones[0].label">phone 0 label</span>:&nbsp;
              </abbr> <span v-text="company.contacts.phones[0].number">phone 0 number</span>
            </div>
            <div v-if="company.contacts.phone[1].active" >
              <br>
              <abbr title="Phone">
                <span v-text="company.contacts.phones[1].label">phone 1 label</span>:&nbsp;
              </abbr> <span v-text="company.contacts.phones[1].number">phone 1 number</span> 
            </div>
            <div v-if="company.contacts.phone[2].active" >
              <br>
              <abbr title="Phone">
                <span v-text="company.contacts.phones[2].label">phone 2 label</span>:&nbsp;
              </abbr> 
              <span v-text="company.contacts.phones[2].number">phone 2 number</span>
            </div>
          </address>
        </div>
        @include('front.partials.contact.social')
      </div>
  </div>
</div>

