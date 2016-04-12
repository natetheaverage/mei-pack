<template>
<div class="timeline-entry"  >
    <div class="timeline-stat" >
        <div class="timeline-icon">
            <img 
                src="{{ users[message.user_id].profile.profile_picture }}" 
                alt="Image" 
            />
        </div>
        <div class="timeline-time">{{ message.updated_at }}</div>
    </div>
    <div class="timeline-label">
        <div class="btn-group pull-right">
            <button
                class="btn btn-danger pull-right"
                @click="toggleSoftDelete"
                v-show="!completed"
            ><span class="fa fa-close"></span> Delete</button>
            <button
                class="btn btn-success mar-rgt"
                @click="toggleSoftDelete"
                v-show="completed"
            ><span class="fa fa-check"></span> Restore</button>
            <button
                class="btn btn-danger"
                @click="trashThis"
                v-show="completed"
            ><span class="fa fa-trash"></span> &nbsp; Trash</button>

        </div>
        <span class="mar-no pad-btm">
            <a href="#" class="btn-link primary text-semibold">   
            {{ users[message.user_id].profile.first_name }} 
            {{ users[message.user_id].profile.last_name }}
            </a> added this message to 
            <a class="btn-link primary" 
                href="#"> conversation #{{ conversation.id }}</a></span>
        <div class="input-group display-flex">
            <input 
                class="col-sm-9 list-group-item-heading form-textarea project-message-body"
                v-model="message.subject"
                @keyup="messageChanged"
            >
            <textarea
                id="message{{ message.id }}_body"
                @keyup="messageChanged"
                v-model="message.body"
                :style="autoHeightFix"
                class="col-sm-12 list-group-item-text form-textarea project-message-body"
            ></textarea>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
    props: {
        parentId: Number,
        currentUser: {type: Number}
    },

    data() {
        return {
            visibleScope: 'active',
            //completed: this.message.deleted,
            typingTimer: {},
            //users: $(bosspos.usersBasic)
        }
    },

    computed:{
        autoHeightFix(){
            return "'height:"+(this.project.description_height + 4)+"px; margin:5px 0;'";
            /* 
            *  Adding the 4px here is a little necessary tweak 
            *  otherwise the field will resize itself 
            *  improperly when saved.
            */
        },
    },

    methods: {
        // Report a change in the project
        // Handles textField height
        // Requests parent to persist item
        messageChanged: function(e) {
            if(e.target.type == 'textarea'){
                autosize(e.target);
                var targetID = '#' + e.target.id;
                this.message.body_height = ($(targetID).height());
            }
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(function(){
                e.targetVM.onChange(e.targetVM.message,'messages','update');
            }, 2500);
        }
    }
}
</script>

<style>
</style>