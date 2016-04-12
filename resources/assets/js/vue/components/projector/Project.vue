<template>
<div class="panel panel-bordered panel-{{ project.class }}">
    <div class="panel-heading"  style="display: flex; width: 100%;">
        <h4 class="panel-title" style="width: 100%;">
            <a
                data-parent="#accordion"
                data-toggle="collapse"
                href="#project{{ project.id }}"
                class="collapsed"
                aria-expanded="false"
            >
                <input
                    class="form-textarea project-message-body project-title"
                    @keyup="projectChanged"
                    v-model="project.title"
                />
            </a>
        </h4>
        <button
            class="btn btn-danger pull-right"
            @click="toggleSoftDelete"
            v-show="!completed"
        >
            <i class="fa fa-close"></i> Delete
        </button>
        <button
                class="btn btn-success mar-rgt"
                @click="toggleSoftDelete"
                v-show="completed"
                >
            <span class="fa fa-check"></span> &nbsp; Restore</button>

        <button
            class="btn btn-danger"
            @click="trashThis"
            v-show="completed"
        >
            <span class="fa fa-trash"></span> &nbsp; Trash</button>
    </div>
    <!--Accordion content collapsible container-->
    <div 
        class="panel-collapse collapse" 
        id="project{{ project.id }}" 
        aria-expanded="false" style="height: 0px;"
    >
        <div class="bg-dark">
            <div class="tab-base accordion-tab-base tab-stacked-left bg-trans">
                <!--Project Navigation Tabs-->
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a 
                            data-toggle="tab" 
                            href="#project{{ project.id }}-details" 
                            aria-expanded="true"
                        >Details</a>
                    </li>
                    <li class="">
                        <a 
                            data-toggle="tab" 
                            href="#project{{ project.id }}-tasks" 
                            aria-expanded="false"
                        >Tasks</a>
                    </li>
                    <li class="">
                        <a 
                            data-toggle="tab" 
                            href="#project{{ project.id }}-conversations" 
                            aria-expanded="false"
                        >Notes</a>
                    </li>
                </ul>
                <!--Tab Content-->
                <div class="tab-content bg-gray-dark">
                    <!-- Details -->
                    <div 
                        id="project{{ project.id }}-details" 
                        class="tab-pane fade active in"
                    >
                        <textarea
                            id="project{{project.id}}_description"
                            class="col-sm-12 list-group-item-text form-textarea project-message-body"
                            :style="autoHeightFix"
                            v-model="project.description"
                            @keyup="projectChanged"
                        ></textarea>
                        <input 
                            class="form-textarea project-message-body" 
                            @keyup="projectChanged" 
                            v-model="project.updated_at" 
                            :disabled="true"
                        />
                    </div>
                    <!-- Details -->

                    <!-- Tasks -->
                    <tasks 
                        :current-user-id="currentUserId"
                        :project-id="project.id"
                        :conversation-id="project.conversation_id"
                        :tasks="tasks"
                    ></tasks>
                    <!-- Tasks end -->

                    <!-- conversation start -->
                    <conversations 
                        :conversations="conversations"
                        :current-user-id="currentUserId"
                        :project-id="project.id"
                    ></conversations>
                    <!-- conversation end -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        visibleScope: 'active',
        softDelete:{},
        currentUserId: { type:Number },
        conversations:{},
        project:{},
        tasks:{},
    },

    data() {
        return {
            completed: this.project.deleted,
            typingTimer: {}
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
        /*
        * Report a change in the project
        * Handles textField height : e = event
        * Calls onChange if the timer is allowed to count down
        * Requests parent to persist item
        */
        projectChanged: function(e) {
            if(e.target.type == 'textarea'){
                autosize(e.target)
                var targetID = '#' + e.target.id;
                this.project.description_height = ($(targetID).height());
            }
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(function(){
                e.targetVM.onChange(e.targetVM.project,'projects','update');
            }, 2500);
        },
        toggleSoftDelete: function(e){
            this.onDelete(e.path[3], 'update');
        },
        trashThis: function(e){
            this.onTrash(e.path[3], 'delete');
        },
        
        createNewConversation: function(){
            var newConversation = {
                "title": "Note Title",
                "description": "A new note",
                "description_height": 100,
                "class": "info",
                "owner_id": this.project.id,
                "owner_type": 'project',
                "facility_id": 1,
                "user_id": this.currentUser
            };
            this.onChange(newConversation, 'conversations', 'new');
        }
    },
    ready(){

    },

}
</script>

<style lang="stylus"> 

.project-message-body
    background-color: transparent
    border: none
    resize: none
    overflow: hidden
    width: 80%
    height: 100%
    margin: 0
    display: block
    &:focus
        outline:none
.project-title
    font-size: 2em

</style>
