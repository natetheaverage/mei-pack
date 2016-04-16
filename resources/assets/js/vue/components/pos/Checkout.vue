<template>
<div class="checkout">
    <salewindow :numpad-entry="numpadEntry"></salewindow>
    <numberpad></numberpad>
    
</div>
</template>

<script>
import Numpad from './NumPad.vue';
import SaleReceipt from './SalesReceipt.vue';

export default {
    name: 'pos',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data() {
        return {
            pageTitle: 'pos',
            numpadEntry:'',
            fullNumber: 0,
            numbers:[],
        }
    },

    computed:{
        
    },

    methods:{
        
    },

    components: {
        'numberpad': Numpad,
        'salewindow': SaleReceipt
    },

}
</script>

<style lang='stylus'>
.checkout
    display:flex
    flex-wrap:wrap
</style>
