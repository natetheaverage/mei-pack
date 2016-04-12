<style>
</style>

<template>
<table class="table table-striped table-bordered dataTable no-footer dtr-inline">
            <tr v-repeat="item in workbook">
                <td v-repeat="detail in item" >
                    <span>@{{ detail }}</span>
                </td>
            </tr>
        </table>
</template>

<script>
module.exports = {

    // Template script is imported via partials blade template
    //template: document.querySelector('#WorkbookTemplate'),

    // Inherit the data from the parent class
    //inherit: true,

    props: {
        onDelete: {},
        onRestore: {},
        onTrash: {},
        onChange: {},
        currentUser: {
            type: Number
        }
    },

    data: function() {
        return {
            //completed: this.project.deleted,
            taskVisibility: 'active',
            conversationVisibility: 'active',
            typingTimer: {}
        }
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
        createNewTask: function(){
            var newTask = {
                "title": "Task Title",
                "description": "New Task Details",
                "description_height": 100,
                "class": "info",
                "due_time": "12:00:00",
                "due_date": "2017-01-20",
                "owner_id": 0,
                "project_id": this.project.id,
                "delegated_id": 0,
                "facility_id": 1,
                "creator_id": this.currentUser,
                "deleted_at": null
            };
            this.onChange(newTask, 'tasks', 'new');
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
    }
}
</script>