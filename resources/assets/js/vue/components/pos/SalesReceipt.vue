<template>
    <div class="receipt-window">
        <div v-for="item in items" class="receipt-item">
            <div class="btn-group-vertical item-controls">
                <button 
                    class="btn btn-info" 
                    @click="editField = !editField"
                ><i class="fa fa-edit"></i></button>
                <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
            </div>
            <div class="item-details">
                <div class="item-id">
                    <span v-text="item.id"></span>
                </div>
                <input
                    class="item-name"
                    :disabled="editField" 
                    v-model="item.inventory.name" 
                />
                <span>$</span>
                <input 
                    class="item-price"
                    :disabled="editField" 
                    v-model="item.unit_price" 
                />
                <span>.00</span>
                <span>SKU:&nbsp;&nbsp;</span>
                <input
                    class="item-sku"
                    :disabled="editField" 
                    v-model="item.product_id" 
                />
                <span>RFID:&nbsp;&nbsp;</span>
                <input 
                    class="item-rfid"
                    :disabled="editField" 
                    v-model="item.inventory.rfid" 
                />
                <span>Count:&nbsp;&nbsp;</span>
                <input
                    class="item-field-sm"
                    :disabled="editField" 
                    v-model="item.inventory.unit_count" 
                />
                <span>Type:&nbsp;&nbsp;</span>
                <input
                    class="item-field-sm"
                    :disabled="editField" 
                    v-model="item.inventory.unit_type" 
                />
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'receipt-window',
    logHooksToConsole: true,
    props:['numpadEntry'],
    data(){
        return{
            pageTitle: 'ReceiptWindow',
            editField: true,
            discounts:[],
        }
    },

    computed:{
        items(){
            //return this.$root.inventories;
        }
    },
     
}
</script>

<style lang='stylus'>
gradiant = linear-gradient(to bottom, #e2e2e2 0%,#dbdbdb 48%,#d1d1d1 52%,#fefefe 100%);
.receipt-window
    width:370px
    height:400px
    /* TODO Attach nano scroller to this */
    overflow: auto
    display:flex
    flex-wrap:wrap
    //flex-direction:column
    border:1px #000 solid
    background: #eee
    .receipt-item
        display:flex
        flex-wrap:wrap
        padding:5px
        .item-controls
            width:15%
        .item-details
            font-size:1.5em
            display:flex
            flex-wrap:wrap
            width:85%
            > input
                width:100%
                border:none
                background-color:none
            .item-id
                width:10%
            .item-name
                width:50%
            .item-price
                text-align:right
                width:15%
            .item-sku
                font-size:1em
                width:80%
            .item-rfid
                font-size:1em
                width:80%
            .item-field-sm
                width:20%
</style>