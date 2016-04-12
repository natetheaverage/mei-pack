<template>
    <div id="project{{ projectId }}-conversations" class="tab-pane fade">
        <div class="list-group bg-dark">

            <visibilityswitch></visibilityswitch>

            <button 
                class="btn btn-block btn-info mar-btm"
                @click="createNewConversation(projectId, currentUserId)"
            >New Note</button>
            <div 
                v-for="conversation in conversations 
                | orderBy 'id' -1 
                | filterBy projectId in 'owner_id' 
                | visibilityMode visibleScope"
            >
                <conversation 
                    id="conversations_{{ conversation.id }}"
                    :btn-link="'/cursos/' + curso.id"
                    :current-user-id="currentUserId"
                    :parent-id="projectId"
                    :conversation="conversation"
                ></conversation>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'conversations',

    props:{
        conversations:{},
        currentUserId:{ type:Number },
        projectId:{ type:Number },
    },

    data(){
        return{
            name: 'conversations', 
            visibleScope: 'active',
            curso:{
                id:1
            }
        }
    },

    computed:{
        conversations(){
            return this.$root.conversations;
        },
    },

}
</script>

<style lang='stylus'>
</style>