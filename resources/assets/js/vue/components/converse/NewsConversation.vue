<template>
  <div v-if="visible" class="row">
      
    <div v-if="editMode" class="pull-right">
      <a v-on:click="editThis" 
      class="btn btn-success">
      <i class="fa" v-bind:class="{'fa-thumbs-o-up': approval ,'fa-thumbs-o-down': !approval}"></i>   | <i class="fa fa-edit" ></i></a>
      <a v-on:click="deleteThis" class="btn btn-danger">X</a>
    </div>   

    <div id={{id}} class="panel panel-default col-sm-12 pad-btm">
      <div class="panel-header col-sm-12">
        <h2>{{title}}</h2>
      </div>
      

      <div class="col-sm-12">
        <img class="img-responsive img-rounded" :src="photo" />
      </div>

      <div class="col-sm-12 mar-top">
        <p><span class="post-body-intro">TOTO News: </span>{{body}}</p>
      </div>

      <div class="col-sm-12">
        <h4 class="post-reply">{{reply}}</h4>
      </div>
      <div class="btn-group btn-group-justified btn-lg col-sm-12">
        <a class="btn btn-lg btn-warning col-sm-4 like-btn"
          @click="like">
          <i  class="fa" 
              :class="{'fa-heart' : isLiked, 'fa-heart-o' : !isLiked}" 
          ></i>
        </a>
        <a 
          class="btn btn-lg btn-info col-sm-4 comments-btn"
          href="/conversation/{{id}}"
          ><i class="fa fa-comments-o"></i> <span class="disqus-comment-count" data-disqus-identifier="#pot-talk-{{id}}"></span>
        </a>
        <a class="btn btn-lg btn-primary col-sm-4 link-btn" 
          v-on:click="shareLink">
          <i class="fa fa-link" ></i>
        </a>
      </div>
      <disqus 
        v-if="openDisqus" 
        transition="expand"
      ></disqus>
    </div>
  </div>

      
  <div class="row">
    <div class="col-sm-12">
      <pre v-show="dataMode">{{ $data | json }}</pre>
    </div>
  </div>
      
</template>

<script>
export default {

  props:[
    'title', 
    'body', 
    'reply', 
    'id', 
    'approval', 
    'acceptedTerms', 
    'photo', 
    'openDisqus', 
    'likes', 
    'user',
    'editMode',
    'editPost',
    'deletePost',
  ],

  data()
  {
    return {
      //userForceResource: this.$resource('/api/user/force'),
      conversationResource: this.$resource('/api/conversation/:id'),
      likeResource: this.$resource('/api/like/:id'),
      conversationUrl: '/conversation/'+this.id,
      isLiked: false,
      visible: true,
    } 
  },

  computed: {
      imgSrc() {
        return this.photo;
      },
      isLiked() {
        if(this.likes.indexOf(this.id) >= 0 ){ 
          return true; 
        } 
        return false; 
      }
    },
    
    methods: {
      like() {
        if(!this.user){
          //this.setGhostAndUser();
          console.log('no user yet');
          return ;
        }
        var that = this;
        if( that.isLiked ){
          that.likeResource.update({id: that.id},{user: that.user.id})
          that.likes.splice(that.likes.indexOf(that.id), 1);
          return;
        }else{
          that.likeResource.save({ user: that.user.id, post: that.id})
          that.likes.push(that.id);
          return;
        };
      },
      
      shareLink: function() 
      {
        var that = this; 
        swal({
          title:'Copy and paste', 
          type: 'input',
          inputValue: that.postUrl,
        });
      },
      toggleLiked: function()
      { this.isLiked = !this.isLiked },

      openPost: function()
      { this.openDisqus = !this.openDisqus },

      editThis()
      { this.editPost(this.id) },

      deleteThis()
      { 
        var that = this;
        this.postResource.delete({id: that.id},
            function(data){
              that.visible = false;
            }
        )
      }
    },

    components: {
        'disqus': require( './Disqus.vue') ,
    },

    ready() 
    {
      console.log('- Conversation.vue Loaded and ready -');
    }
  }
  </script>

  <style>
  </style>