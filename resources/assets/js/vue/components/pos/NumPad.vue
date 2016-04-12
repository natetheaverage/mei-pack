<template>
    <div class="numbers">
        <input class="numbers-entry-field" v-model="displayNumber"></input>
        <div class="numbers-pad">
            <button v-for="btn in buttons"
                :class="btn.style" 
                class=""
                @click="btnHandeler(btn.value)"
                @tap="btnHandeler(btn.value)"
            ><span><i class="fa fa-{{btn.icon}}"></i>{{ btn.name }}</span></button>
            
        </div>
    </div>
</template>

<script>
/**
 * Number.prototype.format(n, x, s, c)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

export default {
    props:['fire'],
    data(){
        return{
            buttons:[
                { name:1, value:1, style: ' single' },
                { name:4, value:4, style:' single' },
                { name:7, value:7, style:' single' },
                { name:'.', value:'.', style:' single' },
                { name:2, value:2, style:' single' },
                { name:5, value:5, style:' single' },
                { name:8, value:8, style:' single' },
                { name:0, value:0, style:' single' },
                { name:3, value:3, style:' single' },
                { name:6, value:6, style:' single' },
                { name:9, value:9, style:' single' },
                { name:'00', value:'00', style:' single' },
                { name:'/', value:'/', style:' single' },
                { name:'X', value:'*', style:' single' },
                { name:'-', value:'-', style:' single' },
                { name:'+', value:'+', style:' single' },
                { name:'', icon:'money', value:'fire', style:' tall' },
                { name:'', icon:'trash', value:'kill', style:' tall' },
            ],
            workingNumber: '',
            savedNumbers:[],
        }
    },

    computed:{
        displayNumber(){
            return Number(this.workingNumber).format(2,3,',','.');
        }
    },

    methods:{
        btnHandeler(value){
            this.numpadKeypress(value)
        },
        numpadKeypress(key){
            if(key == 'fire'){
                this.saveNumber();
                this.clearNumber();
                return;
            } 
            if(key == 'kill'){
                this.clearNumber();
                return;
            }
            return this.workingNumber += key;
        },
        
        saveNumber(){
            this.savedNumbers.push(Number(this.workingNumber).toFixed(2));
        },
        clearNumber(){
            this.workingNumber = '0';
            return;
        },
        clearInput(){
            this.numpadEntry = '';
        },
        
    },
    ready(){
        console.log('<<< numberpad.vue >>> Ready!')
    }
}



</script>

<style lang='stylus'>
gradiant = linear-gradient(to bottom, #e2e2e2 0%,#dbdbdb 48%,#d1d1d1 52%,#fefefe 100%);
.numbers
    width:370px
    border:1px #000 solid
    background: #999
    .numbers-pad
        width: 100%
        height:340px
        display:flex
        flex-wrap:wrap
        flex-direction:column
        border:1px #33ABB7 solid
        > button
            margin: 2.2% 2.8% 2.8% 2.2%
            width:15%
            height:19%
            display:flex
            justify-content:center
            //margin:2.5%
            background: gradiant
            //border:1px #000 solid
            box-shadow: 2px 2px 6px #000;
            border-radius:5px
            &:active
                color: #33ABB7
                margin: 2.5% 2.5% 2.5% 2.5%
                box-shadow: 0px 0px 3px #000;
            > span
                //margin:auto
                //width:40px
                font-size:2em
                line-height:1em
        .tall
            height:30%
    .numbers-entry-field
        width: 100%
        font-size:3em
        font-weight: bold
        text-align: right
        padding:4px
</style>