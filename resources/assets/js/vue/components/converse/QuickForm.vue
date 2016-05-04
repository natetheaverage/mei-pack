<template>
  <div class="quick-message-form">
    <form 
    id="main-contact-form" 
    name="contact-form" 
    method="POST" 
    action="/contact">

      <input type="hidden" name="messageType" value="quickForm">

      <div class="form-group">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          v-model="senderName"
          class="form-control"
          required
        >
      </div>
      <div class="form-group">
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          class="form-control" 
          v-model="senderEmail"
          required
        >
      </div>
      <div class="form-group">
        <input 
          type="text" 
          name="subject" 
          v-model="subject"
          class="form-control" 
          placeholder="Subject" 
          required
        >
      </div>
      <div class="form-group">
        <textarea 
          rows="8" 
          name="body_message" 
          v-model="message"
          class="form-control" 
          placeholder="Message" 
          required
        ></textarea>
      </div>
      <button 
        type="submit" 
        v-on:click="contactForm" 
        class="btn btn-primary" 
        :disabled="!formValid"
      >Send Message</button> 
        <!-- v-if="quickFormValid" -->
      <small v-if="!formValid">All fields required to send message</small>
    </form>
  </div>
</template>

<script>
import { setSetting } from '../../../vuex/actions'

export default {
  name: 'quick-message-form',
  changeTabTitle: true,
  logHooksToConsole: true,
  watchMode: true,
  data() {
    return {
      pageTitle: 'QuickForm',
      formValid: false,
      contactResource: this.$resource('api/mailForm'),

      // mail form fields
      senderName: '',
      senderEmail: '',
      subject: '',
      message: '',
    }
  },
  vuex:{
    actions:{ 
      setSetting
    } 
  },

  computed:{
    formValid()
    {
      if( this.senderName != '' &&
          this.senderEmail != '' && 
          this.senderEmail.indexOf('@') >- 0 &&
          this.subject != '' &&
          this.message != ''
        ){
        return true
      }
      return false
    },
  },

  methods: {
    contactForm(e)
    {
      e.preventDefault();
      var contact = {
        name: this.senderName,
        email: this.senderEmail,
        from: this.senderEmail,
        subject: this.subject,
        body_message: this.message,
        message_type: 'quick-contact-form',
        sent_on: null,
      }

      var form_status = $('<div class="form_status"></div>');
      $('#main-contact-form').prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
     
      this.contactResource.save( contact, function (data) { 
        form_status.html('<p class="text-success">Message Sent!</p>').delay(3000).fadeOut();
      }).error(function () { 
        form_status.html('<p class="text-danger">There was a problem sending your message please try an email or call</p>').delay(3000).fadeOut();
      })  
    },
  },

  ready() 
  {
    
  }
}
</script>

<style lang="stylus">
</style>