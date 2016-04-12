<template>
    <div class="panel panel-primary pad-all">
        
        <p v-if="editMode" class="pad-all col-sm-12">Editing Post: {{post.id}}</p>
        <div class="submission-header">
        
            <h1>{{submissionType}}</h1>
            <a class="btn btn-lg"
                v-on:tap="deletePost" 
                v-on:click="deletePost"
            >X</a>
        </div>
        <div>
        <h4>Feel free to post anonymously!</h4>
        <p class="mar-btm">The email is so I may reach you for clairification. (Spelling etc..) <br />Posts are only moderated to control unwanted solicitation  </p>

        <textinputcomponent 
            title='Name' 
            :type-of.sync="post.name"
            :is-cool="isCool"
        ></textinputcomponent>

        <textinputcomponent 
            title='Email' 
            :type-of.sync="post.email"
            :is-cool="isCool"
        ></textinputcomponent>

        <textinputcomponent 
            title="* Subject / Title" 
            :type-of.sync="post.title"
            :is-cool="isCool"
        ></textinputcomponent>
        
        <div class="mar-top mar-btm">
            <label class="submit-text-label" name="post-body">*Details</label>
            <textarea name="post-body" class="submit-post-body" v-model="post.body"></textarea>
        </div>
    
        <div v-if="editMode" class="pad-all">
            <textinputcomponent
                title='Reply' 
                :type-of.sync="post.reply"
                :is-cool="isCool"
            ></textinputcomponent>
        </div>
    

        <div class="col-sm-5">
            <label class="submit-text-label" 
                name="post-photos">Photos</label>
            <photouploadcomponent :post="post"></photouploadcomponent>
        </div>

        <div class="control-group mar-top col-sm-7">
            <label for="select-state">State:</label>
            <select id="select-state" placeholder="Pick a state...">
            </select>
            <label for="select-city" style="margin-top:20px">City: <small>optional</small></label>
            <select v-model="tag.state" id="select-city" placeholder="Pick a city..."></select>
        </div>

        <div class="control-group mar-top col-sm-7">
            <label for="input-tags">Tags:</label>
            <input 
                type="text" 
                id="input-tags" 
                class="input-tags demo-default"
            ></div>


        <div v-if="editMode" class="mar-top pad-all col-sm-12">
            <span> You approve this post?
                <input  
                    type="checkbox"
                    data-on-title="Yup"
                    data-off-title="Nope" 
                    id="approval-checkbox"
                    v-model="post.approval"
                    data-style="btn-group-sm" 
                    data-on-class="btn-primary" 
                    data-off-class="btn-warning" 
                ></span>
        </div>
    
        <div class="mar-top pad-all col-sm-12">
            <span> * I aggree to the terms and conditions set fourth <a>here</a>: 
                <input 
                    type="checkbox"
                    id="terms-checkbox"
                    data-on-title="Aggree"
                    data-style="btn-group-sm" 
                    data-off-title="Disaggree" 
                    data-on-class="btn-primary" 
                    data-off-class="btn-warning" 
                    v-model="post.accepted_terms"
                ></span>
        </div>
        <div class="mar-top col-sm-12">
            <div class="btn-group-vertical btn-block pull-right">
                <a  
                    v-if="post.accepted_terms"
                    class="btn btn-lg btn-primary" 
                    v-on:tap="updatePost" 
                    v-on:click="updatePost"
                >Blast It!</a>
                <a  
                    v-if="!post.accepted_terms"
                    class="btn btn-lg btn-primary"
                    disabled
                >Blast It!</a>
                <a 
                    class="btn btn-lg btn-danger"
                    v-on:tap="deletePost" 
                    v-on:click="deletePost"
                >Delete</a>
            </div>
        </div>
        <br class="clear" />
    </div>
    
    <pre v-show="dataMode">@{{ $data | json }}</pre>

</template>

<script>
module.exports = {

    props: [ 
            'currentPost', 
            'submissionType', 
            'data-mode', 
            'edit-mode', 
            'edit-post', 
            'isCool', 
            'goHome',
            'likes', 
            'user', 
           ],

    data() {
        return {
            postResource: this.$resource('/api/post/:id'),
            tagResource: this.$resource('/api/tag/:id'),
        
            state: '',
            city: '',
            ghost: {
                ip: 0,
                data:{},
            },
            post: { 
                id: 0,
                name: '',
                type: '',
                email: '',
                title: '',
                body: '',
                photo: 'placeholder/schwag-alert.jpg',
                reply: '',
                approval: false,
                accepted_terms: false,
                tags: [ 
                // { name: 'CO',             type: 'location'        },
                // { name: 'Denver',              type: 'location'        },
                ], 
            }, 
            //stateList: require('../helpers/statelist.js'),
            tagOptions: [],
        }
    },
    
    methods: 
    {

        getGhost: function()
        {
            var that = this;

            $.getJSON("http://ip-api.com/json", 
                function(json)
                {
                    that.ghost = json;
                    that.newPost();
                });
        },
        newPost: function()
        {
            var ghost = this.ghost;
            var post = this.post;
            var newPostAndGhost = { post , ghost };
            var that = this;
            this.postResource.save( newPostAndGhost, 
                function (data) 
                { 
                    that.post.id = data 
                }
                ).error(function (data, status, request) 
                { 
                    console.log("Oops newPost = "+status) 
                })  
            
        },

        govCityApi: require('./govCityApi.js'),

        tagBox: require('./tagBox.js'),

        findCategoryIcon: function(category)
        {
            switch(category) {
                case 'company':
                    return '<i class="fa fa-building"></i>';
                    break;
                case 'person':
                    return '<i class="fa fa-user"></i>';
                    break;
                case 'location':
                    return '<i class="fa fa-map-marker"></i>';
                    break;
                case 'position':
                    return '<i class="fa fa-key"></i>';
                    break;
                default:
                     return '<i class="fa fa-spinner fa-spin"></i>';
            }
        },

        getTags: function() {
            var that = this;
            this.tagResource.get({},
                function(data)
                {
                    that.tagOptions = data;
                    //console.log('getTags');
                    //console.log(that.tagOptions);
                    that.tagBox();
                    that.govCityApi();
                })
        },

        updatePost: function()
        {   
            this.post.type = this.submissionType
            that = this;
            if(this.post.accepted_terms != true)
            {return window.swal("Oops","Sorry but you did not accept the terms", "error");}
            if(this.post.body === '')
            {return swal("Uhh...","You need to write some sort of message", "warning");}
            if(this.post.photo === '')
            {   
                var that = this;
                return swal({
                    title: "What, no photo?",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "I forgot to add it, send me back",
                    confirmButtonText: "Correct I have no photo, blast em` anyway!",   
                    closeOnConfirm: false,
                    closeOnCancel: false 
                }, function(isConfirm){   
                    if (isConfirm) {
                        swal("Cool", "Blasting it!", "success"); 
                        that.persistData()
                    } else {
                        swal({title:"Returning", type: "warning", timer:500, showConfirmButton: false}); 
                    }
                });
            }
            //console.log('- Submission.vue updatePost() Fired -')
            this.persistData();
        },
        deletePost: function()
        {
            var that = this;
            return swal({
                title: "You sure?",
                type: "warning",
                showCancelButton: true,
                cancelButtonText: "No Go Back",
                confirmButtonText: "Yes Delete It!",   
                confirmButtonType: "danger",   
                closeOnConfirm: true,
                closeOnCancel: true,
            },  function(isConfirm){   
                    if(isConfirm){
                        that.post.accepted_terms = false;
                        
                        that.persistData();
                    }
                    //console.log('- Submission.vue updatePost() Fired -');
                }
            );
            
            
        },

        persistData: function()
        {
            var that = this;
            that.postResource.update(
                {id: that.post.id}, {post: that.post}, 
                function (data, status, request) {
                    console.log('- Submission.vue persistData() Fired With Success -');
                    that.goHome();
            }).error(
                function (data, status, request) {
                    console.log('errrrrrrrrrr'+status);
                    console.log( request);
                    that.goHome();
            });  
        },

    },

    components: 
    {
        'textinputcomponent': require( './InputEffects.vue') ,
        'photouploadcomponent': require( './photoupload.js') ,
    },

    ready: function () 
    {
        window.scrollTo(0,0);

        // Duh!
        this.adBannerMode = false; 



        //alert('editing '+ ( this.$route.params.id !== undefined ) );

        if(this.currentPost)
        {
            var that = this;
            
            that.postResource.get( { id: that.currentPost },
                function (data, status, request) {
                    that.post.id = data.id

                    if(data.name != ""){that.post.name = data.name}
                    if(data.email != ""){that.post.email = data.email}
                    if(data.title != ""){that.post.title = data.title}
                    if(data.body != ""){that.post.body = data.body}
                    if(data.reply != ""){that.post.reply = data.reply}
                    if(data.photo != ""){that.post.photo = data.photo}
                    that.post.accepted_terms = data.accepted_terms
                    that.post.approval = data.approval
                    
                    if(data.tags.length > 0){
                        for(var tag in data.tags){
                            that.post.tags.push({ 
                                id: data.tags[tag].id,
                                name: data.tags[tag].name,
                                type: data.tags[tag].type
                            })
                        }
                    }
                    that.getTags()
                    //that.govCityApi();
                    //this.acceptedToggle();
            }).error(function (data, status, request) {
                  console.log('oooOOoops '+status)
                  console.log( request)
            })
            
            return;
        }
        
        this.getTags();
        //this.govCityApi();
        //this.acceptedToggle();

        // Creates a new Post() Model in the database 
        // and sets post.id for use in the Dropzone. 
        this.getGhost();

    }
}