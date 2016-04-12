<template>
  <post
    :accepted-terms="post.accepted_terms"
    :open-disqus="openDisqus "
    :approval="post.approval"
    :title="post.title"
    :photo="post.photo"
    :reply="post.reply"
    :body="post.body"
    :likes="likes"
    :id="post.id"
    :user="user"
  ></post>
   
  @can('be-average')
    <pre v-show="dataMode">@{{ $data | json }}</pre>
  @endcan
</template>

<script>
module.exports = { 

  props:[
          'data-mode', 
          'edit-mode', 
          'edit-post', 
          'isCool', 
          'current-post', 
          'submissionType',
          'likes', 
          'user', 
          'goHome'
        ],

    data: function () 
    {
      return {
        postResource: this.$resource('/api/post/:id'),
        openDisqus: true,
        post: {},
      }
    },

    methods: 
    {
      initiateDisqus: function()
      {
          window.disqus_shortname = 'thedirtweed';
          window.disqus_identifier = '#pot-talk-'+this.post.id;
          window.disqus_title = 'Pot Talk | "'+this.post.title+'"';
          window.disqus_url = window.location.toString();
          (function() {
              var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
              dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
          })();
        if(window.DISQUS){
            window.DISQUS.reset({
              reload: true,
              config: function () {  
                this.page.identifier = '#pot-talk-'+this.post.id;
                this.page.title = 'Pot Talk | "'+this.post.title+'"';
                this.page.url = window.location.toString();
              }
          })
          return;
        }
      },
    },
    components: {
        'post': require('./Post.vue')
    },
    ready: function () {
      window.scrollTo(0, 0);
        this.adBannerMode = false;
        var that = this;
        this.postResource.get({id: $(vueData)[0].id}, 
            function (data, status, request) {
              that.post = data;
              that.initiateDisqus();
          }).error(function (data, status, request) {
            console.log( "<< single.js >> Errrr@ready->this.menu.get()");
          })

    }
  }
</script>