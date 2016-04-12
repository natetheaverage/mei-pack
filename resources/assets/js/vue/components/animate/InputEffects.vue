<style>
.input {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 1em;
    max-width: 350px;
    width: calc(100% - 2em);
    vertical-align: top;
}

.input__field {
    position: relative;
    display: block;
    float: right;
    padding: 0.8em;
    width: 60%;
    border: none;
    border-radius: 0;
    background: #f0f0f0;
    color: #aaa;
    font-weight: 400;
    font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-appearance: none;
    /* for box shadows to show on iOS */
}

.input__field:focus {
    outline: none;
}

.input__label {
    display: inline-block;
    float: right;
    padding: 0 1em;
    width: 40%;
    color: #696969;
    font-weight: bold;
    font-size: 70.25%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.input__label-content {
    position: relative;
    display: block;
    padding: 1.6em 0;
    width: 100%;
}

.graphic {
    position: absolute;
    top: 0;
    left: 0;
    fill: none;
}

.icon {
    color: #ddd;
    font-size: 150%;
}

.input--shoko {
    padding-bottom: 1.9em;
    overflow: hidden;
    margin: 0px;
    max-width: none;
    width: 100%;
}

.input__field--shoko {
    background: transparent;
    margin-top: 1.2em;
    font-size: 1.55em;
    width: 100%;
    color: #666;
    padding: 0;
}

.input__label--shoko {
    left: 0;
    top: 2em;
    width: 100%;
    padding: 0em;
    display: block;
    color: #A09C9C;
    text-align: left;
    position: absolute;
    letter-spacing: 1px;
    pointer-events: none;
    transform-origin: 0 0;
    text-transform: uppercase;
    -webkit-transform-origin: 0 0;
    transition-timing-function: ease-out;
    transition: transform 0.2s 0.1s, color 0.3s;
    -webkit-transition-timing-function: ease-out;
    -webkit-transition: -webkit-transform 0.2s 0.1s, color 0.3s;
}

.graphic--shoko {
    stroke: #A09C9C;
    pointer-events: none;
    stroke-width: 2px;
    top: 1.25em;
    bottom: 0px;
    height: 3.275em;
    -webkit-transition: -webkit-transform 0.7s, stroke 0.7s;
    transition: transform 0.7s, stroke 0.7s;
    -webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
}

.input__field--shoko:focus + .input__label--shoko,
.input__filled .input__label--shoko {
    color: #A58282;
    -webkit-transform: translate3d(0, 3.5em, 0) scale3d(0.85, 0.85, 1);
    transform: translate3d(0, 3.5em, 0) scale3d(0.85, 0.85, 1);
}

.input__field--shoko:focus ~ .graphic--shoko,
.input__filled .graphic--shoko {
    stroke: #A58282;
    -webkit-transform: translate3d(-66.6%, 0, 0);
    transform: translate3d(-66.6%, 0, 0);
}
</style>

<template>
   <span 
        v-show="isCool" 
        class="input input--shoko" 
        :class="{input__filled: isFilled}"
    >
        <input 
            class="input__field input__field--shoko" 
            v-model="typeOf"
            type="text" 
            id="{{title}}" 
        />

        <label class="input__label input__label--shoko" 
        for="{{title}}">
            <span class="input__label-content input__label-content--shoko">{{title}}</span>
        </label>
        <svg class="graphic graphic--shoko" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
            <path d="M0,2.5c0,0,298.666,0,399.333,0C448.336,2.5,513.994,13,597,13c77.327,0,135-10.5,200.999-10.5c95.996,0,402.001,0,402.001,0"/>
        </svg>
    </span> 

    <span v-if="!isCool">
        <div class="mar-top">
        <label class="submit-text-label" 
            :name="title">
            {{title}}
        </label>
        <input  class="form-control submit-text-field" 
                v-model="typeOf"
                type="text" 
                :name="title"
                id="{{title}}" />
        </div> 
    </span>
</template>

<script>
    module.exports = {

        props: ['isCool', 'dataMode', 'title', 'typeOf'], 

        data: function () {
          return {
            isFilled: false,
          }
        },

        computed: {
            isFilled: function(){
                if(this.typeOf != ""){
                    return true;
                }
                return false;
            }
        },
        read() {
            return '- Text Field Initiated -';
        }
    }
  </script>