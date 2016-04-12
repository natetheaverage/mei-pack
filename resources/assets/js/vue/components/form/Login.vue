<style>
</style>

<template>
    <form action="/auth/login" method="POST">
        <input type="hidden" name="_token" :value="csfr">
        <input type="input" name="email" value="thedirtweed@gmail.com" style="display:none">
        <input v-model="password" type="input" name="password" value="" style="display:none">
    </form>
</template>

<script>
module.exports = {
    props:['likes', 'user', 'data-mode', 'edit-mode', 'goHome'],
    
    data() {
        return {
            password: '',
            csfr: $('#token')[0].getAttribute('value'),
            loginResource: this.$resource('/auth/login'),
        }
    },

    methods:
    {
        fireSweetness()
        {
            var that = this;
            swal({  title: "What?",   
                    text: "-- -- -- -- -- -- -- -- --",   
                    type: "input",
                    inputType: "password",
                    inputValue: "SSHP59gSS",   
                    showCancelButton: true,   
                    closeOnConfirm: false,   
                    animation: "zoom-in",   
                    inputPlaceholder: "Go fuck yourself!" }, function(inputValue)
                    {   if (inputValue === false) return false;      
                        if (inputValue === "") {     
                            swal.showInputError("You Idiot!");     
                            return false   
                        }
                        swal({title: 'Cool', 
                            text: '... beans', 
                            type: 'success',
                            showCancelButton: true,   
                            closeOnConfirm: false,
                            showLoaderOnConfirm: true,
                        }, function() 
                        {
                            that.save();
                        })      
                        that.password = inputValue;
                        
                    });
        },



        save()
        {
            var loginForm = $("form")[0];
            var that = this;
            loginForm.submit(function(e){
                e.preventDefault();
                var formData = loginForm.serialize();
                that.loginResource(formData,
                function(data){
                    //console.log(data)
                    that.goHome();
                }).error(function(data){
                    console.log('errrr check network tab for login')
                    that.goHome();
                })
            })
        }
    },
    ready()
    {
        //console.log('- Login.vue Loaded and ready -');
        //console.log(this.csfr);
        this.fireSweetness();
    }
}

</script>