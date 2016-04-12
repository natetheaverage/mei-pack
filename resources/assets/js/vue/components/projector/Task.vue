<template>
<div class="row mar-btm"  >
        <div class="col-sm-12">
            <a class="col-sm-12 list-group-item mar-no">
                <input 
                    class="col-sm-12 list-group-item-heading form-textarea project-message-body" 
                    v-model="task.title" 
                    @keyup="taskChanged"
                />
                <textarea 
                    class="col-sm-12 list-group-item-text form-textarea project-message-body"
                    v-model="task.description"
                    @keyup="taskChanged"
                ></textarea>
            </a>
        </div>
        <div class="btn-group mar-lft">
            <button class="btn btn-mint">
                <span class="fa fa-user"></span> Delegate
            </button>
            <button 
                class="btn btn-warning" 
                v-show="!completed" 
                @click="$parent.$parent.toggleSoftDelete" 
            ><span class="fa fa-close"></span> Delete</button>
            <button 
                class="btn btn-success" 
                v-show="completed" 
                @click="$parent.$parent.toggleSoftDelete"
            ><span class="fa fa-check"></span> Restore</button>
            <button 
                class="btn btn-danger" 
                v-show="completed" 
                @click="$parent.$parent.trashThis"
            ><span class="fa fa-trash"></span> Trash</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: {},
        currentUserId: { type:Number },
        projectId:{ type:Number },
    },
    data() {
        return {
            completed: this.task.deleted,
            typingTimer: {}
        }
    },
    methods: {
        // Report a change in the project
        // Handles textField height
        // Requests parent to persist item
        taskChanged(e) {
            if(e.target.type == 'textarea'){
                autosize(e.target);
                var targetID = '#' + e.target.id;
                this.task.description_height = ($(targetID).height());
            }
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(function(){
                e.targetVM.onChange(e.targetVM.task,'tasks','update');
            }, 2500);
        }
    },
}
</script>

<style>
</style>
