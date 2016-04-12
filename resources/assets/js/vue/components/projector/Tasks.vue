<template>
<div id="project{{ projectId }}-tasks" class="tab-pane fade">
    <div class="list-group bg-dark">

        <visibilityswitch></visibilityswitch>

        <button
            class="btn btn-block btn-info mar-btm"
            @click="createNewTask(projectId, conversationId, currentUserId)"
        >New Task</button>
    </div>
    <div 
        id="tasks_{{ task.id }}" 
        v-for="task in tasks 
        | orderBy 'id' -1 
        | filterBy projectId in 'project_id'
        | visibilityMode visibleScope" 
    >
        <task
            :current-user-id="currentUserId"
            :parent-id="projectId"
            :task="task"
        ></task>
    </div>
</div>
</template>
<script>
export default {
    name: 'tasks',

    props:{
        conversationId:{ type:Number },
        currentUserId: { type:Number },
        projectId:{ type:Number },
    },

    data(){
        return{
            name: 'tasks',
            visibleScope: 'active',
        }
    },

    computed:{
        tasks(){
            return this.$root.tasks;
        }
    },


    methods:{
        createNewTask(){
            var newTask = {
                "title": "Task Title",
                "description": "New Task Details",
                "description_height": 100,
                "class": "info",
                "due_time": "12:00:00",
                "due_date": "2017-01-20",
                "owner_id": 0,
                "project_id": this.projectId,
                "delegated_id": 0,
                "facility_id": 1,
                "creator_id": this.currentUserId,
                "deleted_at": null
            };
            this.onChange(newTask, 'tasks', 'new');
        },
    },

}
</script>
<style lang='stylus'>
</style>