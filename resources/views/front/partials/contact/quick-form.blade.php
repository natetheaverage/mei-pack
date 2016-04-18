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
            name="name" 
            placeholder="Name" 
            v-model="senderName"
            class="form-control" 
            required>
    </div>
    <div class="form-group">
        <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            class="form-control" 
            v-model="senderEmail"
            required>
    </div>
    <div class="form-group">
        <input 
            type="text" 
            name="subject" 
            v-model="subject"
            class="form-control" 
            placeholder="Subject" 
            required>
    </div>
    <div class="form-group">
        <textarea 
            rows="8" 
            name="message" 
            v-model="message"
            class="form-control" 
            placeholder="Message" 
            required></textarea>
    </div>
    <button 
        type="submit" 
        v-on:click="contactForm" 
        class="btn btn-primary" 
        v-if="contactReady"
    >Send Message</button> 
    <span v-if="!contactReady">All fields required to send message</span>
</form>