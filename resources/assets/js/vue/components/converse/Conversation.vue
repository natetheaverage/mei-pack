<template>
<div>
    <div class="row mar-btm">
        <div class="btn-group mar-lft">
            <button class="btn btn-mint">
            <span class="fa fa-users"></span> Tag</button>
            <button 
                class="btn btn-warning" 
                v-if="!completed" 
                 
            ><span class="fa fa-close"></span> Delete</button>
                <!-- @click="toggleSoftDelete" -->
            <button 
                class="btn btn-success" 
                v-if="completed" 
            ><span class="fa fa-check"></span> Restore</button>
                <!-- @click="toggleSoftDelete" -->
            <button 
                class="btn btn-danger" 
                v-if="completed" 
            ><span class="fa fa-trash"></span> Trash</button>
                <!-- @click="trashThis" -->
        </div>
        <div class="col-sm-12">
            <a class="col-sm-12  list-group-item mar-no">
                <div class="col-sm-3 bord-rgt pull-left">
                    <!-- <img src="{{ users[conversation.user_id].profile.profile_picture }}"> -->
                    <h4>
                    <!-- {{ users[conversation.user_id].profile.first_name }}  -->
                    <!-- {{ users[conversation.user_id].profile.last_name }} -->
                    </h4>
                    <!-- <h4>{{ users[conversation.user_id].email }}</h4>
                    <h4>{{ users[conversation.user_id].role }}</h4>
                    <h4>{{ users[conversation.user_id].facility_id }}</h4> -->
                </div>
                <input 
                    class="col-sm-9 list-group-item-heading form-textarea project-message-body"
                    v-model="conversation.title"
                    :keyup="conversationChanged"
                />
                    <textarea 
                        class="col-sm-9 list-group-item-text form-textarea project-message-body "
                        v-model="conversation.description"
                        :keyup="conversationChanged">
                    </textarea>
                </a>
            </div>
        </div>

        <visibilityswitch></visibilityswitch>

        <!-- notes start -->
        <div class="timeline">
            <div class="timeline-header">
                <div 
                    v-for="message in messages 
                    | filterBy conversation.id in 'conversation_id' 
                    | visibilityMode visibleScope"
                >
                    <message 
                        id="messages_{{ message.id }}"
                        :current-user-id="currentUserId"
                        :parent-id="conversation.id"
                        :message="message"
                    ></message>
                </div>
                <button 
                    class="btn btn-mint" 
                    :click="createNewMessage(parentId, currentUserId)"
                ><span className="fa fa-plus"></span> message</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'conversation',
    changeTabTitle: false,
    logHooksToConsole: false,
    watchMode: true,
    props: {
        conversation:{},
        parentId: Number,
        parentType: {},
        currentUserId: {
            type: Number
        }
    },
    data() {
        return {
            pageTitle: 'conversations', 
            //completed: this.conversation.deleted,
            typingTimer: {},
            visibleScope: 'active',
        }
    },
    methods: {
        // Report a change in the project
        // Handles textField height
        // Requests parent to persist item
        conversationChanged: function(e) {
            if(e.target.type == 'textarea'){
                autosize(e.target);
                var targetID = '#' + e.target.id;
                this.conversation.description_height = ($(targetID).height());
            }
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(function(){
                e.targetVM.onChange(e.targetVM.conversation,'conversations','update');
            }, 2500);
        },
        createNewMessage: function(p, u){
            var newMessage = {
                "subject": "Task Title",
                "body": "New Task Details",
                "body_height": 100,
                "class": "info",
                "conversation_id": p,
                "user_id": u,
            };
            //this.onChange(newMessage, 'mesages', 'new');
        }
    }
}
</script>

<style>
</style>
