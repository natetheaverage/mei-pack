
//import Post from './components/Post.vue';
//==========================================================
//Replace srizon with your dribbble username
//==========================================================
// $.jribbble.getShotsByPlayerId('natetheaverage', function (playerShots) {
//     var html = [];


// //========================
// //PORTFOLIO SETUP
// //========================
//     $.each(playerShots.shots, function (i, shot) {
//         html.push('<li><a href="' + shot.url + '">');
//         html.push('<img src="' + shot.image_teaser_url + '" ');
//         html.push('alt="' + shot.title + '"></a>');
//         html.push('<h3><a href="' + shot.url + '">' + shot.title + '</h3>');
//         html.push('<div class="likecount"><span class="icon-heart"></span> ' + shot.likes_count + '</div>');
//         html.push('<div class="commentcount"><span class="icon-bubbles"></span> ' + shot.comments_count + '</a></li></div>');
//     });

//     $('#shotsByPlayerId').html(html.join(''));
// }, {page: 1, per_page: 9});



export default  {
    
    data() {
        return {
            //g3YoP735cgISv7HavatpB88UwcYr5E9Q
            //behanceToken: 'OYlVWtJWfgjkrpRxNT0hODcsG3oLw3S1',
            behancePortfolio: this.$resource('http://api.behance.net/v2/users/natetheaverage/projects?client_id=g3YoP735cgISv7HavatpB88UwcYr5E9Q&callback=bang'),
        }
    },
    methods: {

    },
    ready(){
        
        var that = this;
        this.$http.get('https://api.behance.net/v2/users/natetheaverage/projects?client_id=g3YoP735cgISv7HavatpB88UwcYr5E9Q',
       
            function(json) { 
                console.log(json)
            }
     
        );

        
    }
}