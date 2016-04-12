import store from './vuex/store.js'
import { getCompanyDetails } from './vuex/getters.js'
import { getPublicSettings } from './vuex/getters.js'
import { setSetting } from './vuex/actions.js'
export default {
	name: 'MEi App',
	store,
	vuex:{
		getters:{ 
			company: getCompanyDetails,
			getPublicSettings
		},
		actions:{
			setSetting
		},
	},
	methods:{
		save() {
			// console.log('loggedIn ?');
			// console.log(this.setSetting);
   //  	//this.setSetting('loggedIn') 
			// console.log('loggedIn ?');
			// console.log(this.setSetting.loggedIn);
			// this.editPage = true;
		},
		login(e) {
			if(this.loggedIn){this.loggedIn = !this.loggedIn} else {     
            e.preventDefault();
            var that = this;
            swal({  
                title: "password please",   
                text: "-- -- -- -- -- -- -- -- --",   
                type: "input",
                inputType: "password",
                showCancelButton: true,   
                closeOnConfirm: false,   
                animation: "zoom-in",   
                inputPlaceholder: "- - - -" }, 
                function(inputValue){   
                    if (inputValue === false) return false;      
                    if (inputValue === "") {     
                        swal.showInputError("Enter a password!");     
                        return false   
                    };
                    if (inputValue === "l") {
                        console.log('Password Correct');
                      	that.setSetting(that.getPublicSettings.loggedIn, true) 
												that.setSetting('editMode', true) 
                        //Login Success handler
                        swal({
                          title: "Logged In", 
                          closeOnConfirm: false,
                          showCancelButton: true,
                          confirmButtonText: 'Go to Admin Panel',
                          cancelButtonText: 'Edit Page',
                          type:'success',
                        },function(isConfirmed){
                          if(isConfirmed){ window.location.replace('admin'); }
                        }); //End Login Success handler
                    };
                }
            );// End admin button sweet alert
        }// End Else
    },// End adminlogin
		
	},

}
