<template>
  <div 
    class="pad-no edit-btn" 
    v-if="$root.editMode" 
  >
    <a 
      style="padding:10px 5px" 
      @click="$root.editButton(button)" 
      class="pad-no text-bold text-bright" 
    ><i class="fa fa-edit"></i></a>
  </div>
  <objecteditor 
    v-if="$root.editMode" 
    :object="button"
  ></objecteditor>
    <a 
      :id="button.id" 
      v-link="button.href" 
      class="mtrl-btn mtrl-raised mtrl-btn-dashboard bg-off-white"
    >
    
      <!-- :class="button.class" -->
    <i :class="'fa fa-4x ' + button.icon"></i>
    <p class="dashboard-text" v-text="button.label"></p>
    <span 
      v-if="button.notification_text"
      :class="'pull-right badge badge-'+button.notification_color+' '+button.notification_style"
      v-text="button.notification_text"
    >
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
  position absolute
  z-index: 10;
  padding: 6px 2px;
</style>