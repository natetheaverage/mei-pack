<style>
.link {
    outline: none;
    text-decoration: none;
    position: relative;
    font-size: 2em;
    line-height: 1;
    color: #9e9ba4;
    display: inline-block;
}

/* Ilin */
.link--ilin {
    font-weight: 900;
    /*text-transform: uppercase;*/
    line-height: 1.2;
    overflow: hidden;
    color: #555;
}
.link--ilin span {  
    position: relative;
    display: inline-block;
    -webkit-transition: color 0.2s;
    transition: color 0.2s; 
}
.link--ilin:hover {
    cursor: pointer;
}
.link--ilin:hover span:first-of-type {
    color: #00E4AF;
}
.link--ilin:hover span:last-of-type {
    color: #e51300;
}
.link--ilin span::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1e1a1b;
    line-height: 1.2;
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
}
.link--ilin span:last-of-type::before {
    background: #1e1a1b;
}

.link--ilin:hover span:last-of-type::before,
.link--ilin span:first-of-type::before {
    -webkit-transform: translate3d(0,-150%,0);
    transform: translate3d(0,-150%,0);
}

.link--ilin:hover span:first-of-type::before,
.link--ilin span:last-of-type::before {
    -webkit-transform: translate3d(0,150%,0);
    transform: translate3d(0,150%,0);
}

.tail {
    display: inline;
}

.nav-info {
    position: absolute;
    background-color: #FFE73A;
    border-radius: 0 0 3px 3px;
    padding: 10px 15px 0;
    width: 100%;
}

</style>

<template>

    <a 
        class="link link--ilin mar-top" 
        @click="openThis"
        v-touch:tap="openThis"
        @mouseover="animateOn"
        @mouseout="animateOff"
    >
        <span>
            {{frontHead}}<div class="tail" v-show="tail">{{frontTail}}</div>
        </span><span >
            {{backHead}}<div class="tail" v-show="tail">{{backTail}}</div>
        </span>
    </a> 
    
</template>

<script>

module.exports = { 

    props:['name', 'details', 'clicked', 'hoverOn', 'hoverOff'],

    data: function() {
        return {
            tail: false,
            frontHead: '',
            backHead: '',
            frontTail: '',
            backTail: '',
        }
    },

    methods: 
    {
        // hover()
        // {
        //     this.showButtonDetails = !this.showButtonDetails
        // },

        animateOn()
        {
            this.tail = true
            this.hoverOn(this.name, this.details)
        },
        animateOff()
        {
            this.tail = false
            this.hoverOff()
        },
        openThis() 
        {
            this.clicked(this.name, this.details)
        }
    },

    ready()
    {
        var title = this.name.split(" ")
        this.frontTail = title[0].slice(1,title[0].length).toLowerCase();
        this.backTail = title[1].slice(1,title[1].length).toLowerCase();
        this.frontHead = title[0].slice(0,1).toLowerCase();
        this.backHead = title[1].slice(0,1).toLowerCase();
        //console.log(this.frontHead)
    }
}
</script>