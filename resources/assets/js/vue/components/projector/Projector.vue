<template>
<div id="projecter-directory">
        <!--Accordion Grouping-->
        <div class="panel-group accordion" id="accordion">

            <!-- item template -->
            
            <visibilityswitch></visibilityswitch>

            <button @click="createNewProject( currentUserId )" class="btn btn-block btn-info mar-btm"><span class="fa fa-plus"></span></button>
            <div 
                v-for="project in projects | orderBy 'id' -1 | visibilityMode visibleScope"
                id="projects_{{ project.id }}" 
                class="panel" 
            > <!--  --> 
                <project
                        :project="project"
                        :tasks="tasks"
                        :conversations="conversations"
                        :current-user-id="currentUserId"
                        soft-delete="true"
                ></project>
            </div>
        </div>
    </div>
</template>

<script>
import Project from './project.vue';
import Task from './task.vue';

export default {
    name: 'projector',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data: function() {
        return {
            pageTitle: 'projector',
            showDeleted: false,
            visibleScope: 'active',
            currentUserId: this.$root.currentUser.profile.id, 
        }
    },

    computed:{
        projects(){
            return this.$root.projects;
        },
        tasks(){
            return this.$root.tasks;
        },
        conversations(){
            return this.$root.conversations;
        },
        messages(){
            return this.$root.messages;
        },
    },

    methods: {
        /*
        * New Objects
        * each calls save method to persist
        */
        createNewProject: function(user_id){
            var newProject = {
                "title": "Title",
                "description": "Details",
                "description_height": 100,
                "class": "info",
                "due_time": "12:00:00",
                "due_date": "2017-01-20",
                "owner_id": 0,
                "conversation_id": 0,
                "delegated_id": 0,
                "facility_id": 1,
                "creator_id": user_id,
                "deleted_at": null
            };
            this.save(newProject, 'projects', 'new');
        },

        /*
         * Persistence Success methods
         * each handles its actions success
         */
        newPersisted: function(objectList, newObject){
            //console.log('saved', newObject[newObject.length - 1].id,'pushing to',objectList);
            this[objectList].push(newObject[newObject.length - 1]);
        },
        updatePersisted: function(type, returned, obj){
            //console.log('saved',type, obj.id); //
        },
        deletePersisted: function(objectType, deletedObject, obj){
            var list = this[objectType];
            for(var i in this[objectType]){if(list[i].id == obj.id){list.splice(i, 1)}} // Find deleted object and remove it from list
        },
        /*
         * Component called  methods
         * each handles its components requested action
         */
        softDelete: function(objectID, action) {
            var model = this.pullApartObjectID(objectID);
            console.log(objectID, model)
            for(var i in model.obj){
                if (model.obj[i].id == model.id){
                    //console.log(model.obj[i].deleted)
                    model.obj[i].deleted = !model.obj[i].deleted; //Toggle deleted Var
                    //console.log(model.obj[i].deleted)
                    this.save(model.obj[i], model.type, action); // Persist
                }
            }
        },
        permanentTrash: function(objectID) {
            var model = this.pullApartObjectID(objectID)
            for(var i in model.obj){
                if (model.obj[i].id == model.id){
                    this.save(model.obj[i], model.type, 'delete');
                }
            }
        },
        /*
         * Vue Object persistence
          * obj = component/object to persist
          * objType = name of object
          * action = will accept (update, new, delete)
         */
        save: function(obj, objType, action) {
            this.$http.post('/api/'+action+'/'+objType, obj, function (model, status, request) {
            }).success(function (model) {
                this.$set(objType, model);
                //this[action+'Persisted'](objType, model, obj)
            })
        },

        /*
         * Helper Methods
         */
        pullApartObjectID: function(objectID) {
            var modelId = objectID.id.substr((objectID.id.indexOf('_') + 1), objectID.id.length);
            var modelType = objectID.id.substr(0, objectID.id.indexOf('_'));
            var that = this[modelType];
            return {obj: that, id: modelId, type: modelType}
        }
    },

    //created(){
        // this.projectResource.get(
        // function (projects, status, request) {
        //     console.log("<< projector.vue >> project data fetched");
        //     this.$set('projects', projects);
        // }).error(function (data, status, request) {
        //     console.log( "<< projector.vue >> Errrr@ready->this.menu.get()");
        // })
    //},

}
</script>

<style>

</style>
