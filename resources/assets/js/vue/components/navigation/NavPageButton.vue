<template>
    <div 
        class="pad-no edit-btn" 
        v-if="editMode"
    >
        <a 
            style="padding:10px 5px" 
            @click="$root.editButton(button.id)" 
            class="pad-no text-bold text-bright" 
        ><i class="fa fa-edit"></i></a>
    </div>
       <objecteditor 
        v-if="editMode" 
        :object="button"
    ></objecteditor>
        <a 
            id="{{ button.id }}" 
            v-link="button.href" 
            :class="button.class"
        >
        <i class="fa fa-4x {{ button.icon }}"></i>
        <span class="dashboard-text"> {{ button.label }} </span>
        <span 
            v-if="button.notification_text"
            class="pull-right badge {{ button.notification_style }} badge-{{ button.notification_color }} ">
            {{ button.notification_text }} 
        </span>
    </a>
</template>

<script>
export default {
  props: ['button', 'editMode'],
}
</script>

<style lang="stylus">
.edit-btn
    position: absolute
</style>