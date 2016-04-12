<script>
    export default {
        name:'registration',
        data() {
            return {
                registrationResource: this.$resource('/api/registration'),
                show: true,
                standerdBooth: 0,
                standerdPrice: 750,
                cornerBooth: 0,
                cornerPrice: 900,
                electrical: 0,
                electricalPrice: 75,
                showCount: 0,
                greeley: 0,
                springs: 0,
                junction: 0,
                denver: 0,
                denverTotal: 0,
                //beforeDiscountsTotal: 0,
                prePay: 0,
                multiBoothDiscount: 0,
                multiShowDiscount: 0,
                fullTotal: 0,
                fullDiscount: 0,
                amountOfShows: 0,
                companyName: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                email: '',
                website: '',
                details: '',
            }
        },
        computed:
        {
          eventsApplyingFor(){
            // make it so every check adds that event to array
          },
            prePayDiscount() {
                if(this.prePay){
                    return 0.05;
                }
                return 0;
            },
            multiShow() {
                var count = this.greeley + this.springs + this.junction + this.denver;
                this.showCount = count;
                if(count > 1) {
                    this.multiShowDiscount = 0.05;
                    return true;
                }
                
            },
            multiBooth() {
                var count = (this.standerdBooth * 1) + (this.cornerBooth * 1);
                if(count > 1) {
                    this.multiBoothDiscount = 0.05;
                    return true;
                }
            },
            //denverBooth
            standerdPrice() {
                // if(this.denver){
                //     return 850 ;
                // }
                return 750 ;
            },
            cornerPrice() {
                // if(this.denver){
                //     return 1000 ;
                // }
                return 900 ;
            },
            standerdTotal() {
                
                return this.standerdBooth * this.standerdPrice;
            },
            cornerTotal() {
                
                return this.cornerBooth * this.cornerPrice;
            },
            electricalTotal() {
                return this.electrical * this.electricalPrice;
            },
            beforeDiscountsTotal(){
                this.denverTotal = (this.standerdBooth * 100)+(this.cornerBooth * 100);
                return (
                    this.standerdTotal + 
                    this.cornerTotal + 
                    this.electricalTotal +
                    this.denverTotal
                    ) * this.showCount;
            },
            fullTotal(){
                var discounts = 
                    (   this.multiBoothDiscount + 
                        this.multiShowDiscount + 
                        this.prePayDiscount
                        ) * this.beforeDiscountsTotal;

                this.fullDiscount = discounts;
                return this.beforeDiscountsTotal - discounts;
            },
        },
        methods:
        {
            prePay() {
                 this.prePay = !this.prePay
            },
            toggleGreeley() {
                this.greeley = !this.greeley
            },
            toggleSprings() {
                this.springs = !this.springs
            },
            toggleJunction() {
                this.junction = !this.junction
            },
            toggleDenver() {
                this.denver = !this.denver
            },
            save(){
                var registration = 
                    {
                        companyName: this.companyName,
                        street: this.street,
                        city: this.city,
                        state: this.state,
                        zip: this.zip,
                        phone: this.phone,
                        email: this.email,
                        website: this.website,
                        details: this.details,
                        shows: this.showsToString(),
                        standerdBooth: this.standerdBooth,
                        cornerBooth: this.cornerBooth,
                        elecrical: this.elecrical,
                        prePay: this.prePay,
                        multiShow: this.multiShow,
                        multiBooth: this.multiBooth,
                        fullTotal: this.beforeDiscountsTotal,
                        fullDiscount: this.fullDiscount,
                        calculatedTotal: this.fullTotal,

                    };
                var that = this;
                that.registrationResource.update(registration,
                function(data, request, status){
                    console.log(data)    
                }).error(function(data, request, status){
                    console.log("Oops registration fail = "+status)    
                })
            },
            showsToString(){
                var shows = '';
                if(this.greeley){shows += 'greeley,'};
                if(this.springs){shows += 'springs,'};
                if(this.junction){shows += 'junction,'};
                if(this.denver){shows += 'denver,'};
                return shows;
            },

        },
        ready() {
            setTimeout(() => this.show = false, 3000);
            //this.fire();
        }
    }
</script>
<style lang="stylus">
.registration-holder 
    padding 10px
    display flex
    align-content center
    justify-content center
    .form
      display flex
      flex-wrap wrap
      background-color #eee
      padding 10px
      flex-basis 100%
      .booths
        width 70px
      > fieldset > legend
        padding-left 30px
        padding-top 30px
      .form-group 
        > div 
          margin 5px 0
        > label
          margin 5px 0
          padding 4px 0
          text-align right
      
      .address-box
        flex-basis 50%
        display flex
        flex-wrap wrap
      .contact-box
        flex-basis 50%
        display flex
        flex-wrap wrap
      .details-box
        flex-basis 100%
        #product-details
          height 15em
      .product-box
        flex-basis 100%
        display flex
        flex-wrap wrap
        > div
          flex-basis 20%
          display flex
          flex-direction column
          justify-content space-around
          align-content flex-start 
        .amount-select
          padding 20px
          > select
            display inline-block
            width 75px
</style>

<template> 
<div class="registration-holder">
  <form class="form">

    <registrationcities></registrationcities>

    <addressform></addressform>  

    <contactsform></contactsform> 

    

  <fieldset class="details-box"> 
    <!-- Form Name -->
        <legend>Details</legend>
        <!-- Textarea -->
        <div class="form-group">
          <label class="col-md-12 control-label" style="text-align:left" for="products">Products or Services being exhibited (please discribe)</label>
          <div class="col-md-12">                     
            <textarea class="form-control" id="product-details" name="products"></textarea>
          </div>
        </div>
    </fieldset><!-- .details-box -->

    <div class="product-box"> 
    <!-- Form Name -->
    <legend>Options</legend>
    
    <venuedetails></venuedetails>

    <optionsform></optionsform>

    </div> <!-- .product-box -->
    
        <div class="product-box"> 
            <a class="btn btn-primary" v-on:click="save">
            Send
            </a>
            <a class="btn btn-danger" v-on:click="close">
            Close
            </a>
        </div>
    </form>
</div>
</template>