<style>
</style>

<template>
  <div v-for="post in posts | orderBy 'id' -1 ">
            <post
                :accepted-terms="post.accepted_terms"
                :open-disqus="openDisqus "
                :delete-post="deletePost"
                :approval="post.approval"
                :edit-mode="editMode"
                :edit-post="editPost"
                :title="post.title"
                :photo="post.photo"
                :reply="post.reply"
                :body="post.body"
                :likes="likes"
                :id="post.id"
                :user="user"
                >
            </post>
    </div>

    <pre v-show="dataMode">@{{ $data | json }}</pre>

</template>

<script>
module.exports = { 

    props:[
            'data-mode', 
            'edit-mode', 
            'edit-post', 
            'isCool', 
            'current-post', 
            'likes', 
            'user', 
            'goHome',
            'submissionType'
          ],

    //inherit: true,

    data: function () {
      return {
        feedResource: this.$resource('/api/feed/:id'),
        posts: [],
        lowestId: "10000000", 
        loading: false,
        openDisqus: false,
      }
    },

    methods: 
    {
      loadMore: function()
      {
        this.loading = true;
        var that = this;
          this.feedResource.get({id: that.lowestId}, 
            function (data, status, request) {
              if(data){
                for(var i=0; i < data.length; i++){ 
                  that.posts.push(data[i]);
                  that.lowestId = data[4].id;
                }
              }
              that.loading = false;
        }).error(function (data, status, request) {
            //console.log('pop');
        })
      },
      

    },
    components: {
        'post': require('./Post.vue')
    },

    ready: function () {
      console.log('- Content.vue Loaded and ready -')
    
      this.adBannerMode = false;

      this.loadMore()

      var that = this;
      $(window).scroll(function(){
      var wintop = $(window).scrollTop(), 
      docheight = $(document).height(), 
      winheight = $(window).height();
      var  scrolltrigger = 0.95;

      if  ((wintop/(docheight-winheight)) > scrolltrigger && !that.loading) {
        that.loading = true;
        that.loadMore();
      }
    });
    }
  }
  </script>