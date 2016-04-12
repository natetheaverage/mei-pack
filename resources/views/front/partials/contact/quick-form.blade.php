<form 
    id="main-contact-form" 
    name="contact-form" 
    method="POST" 
    action="/contact">

    <input type="hidden" name="_method" value="POST">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <div class="form-group">
        <input 
            type="text" 
            v-model="senderName"
            name="name" 
            class="form-control" 
            placeholder="Name" 
            required>
    </div>
    <div class="form-group">
        <input 
            type="email" 
            v-model="senderEmail"
            name="email" 
            class="form-control" 
            placeholder="Email" 
            required>
    </div>
    <div class="form-group">
        <input 
            type="text" 
            v-model="subject"
            name="subject" 
            class="form-control" 
            placeholder="Subject" 
            required>
    </div>
    <div class="form-group">
        <textarea 
            name="message" 
            v-model="message"
            class="form-control" 
            rows="8" 
            placeholder="Message" 
            required></textarea>
    </div>
    <button type="submit" v-on:click="contactForm" class="btn btn-primary" v-if="contactReady">Send Message</button> 
    <span v-if="!contactReady">All fields required to send message</span>
</form>