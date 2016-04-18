import { getCompanyDetails, getPublicSettings } from './vuex/getters.js'
import { setSetting, toggleSetting, setMenu, setCopy, setFeatures } from './vuex/actions.js'
import store from './vuex/store'
import router from './vue-router/router' 

export default {
	name: 'MEiApp',
  watchMode: true,
  data(){
    return{
      names:'MEi Aplic',
      id: 0,
      objectResource: this.$resource('/api/:objectType/:objectOptions'),
      apiResource: this.$resource('/api/:model/:id'),
      editMode: false,
      editAll: false,
      dataMode: false,
      baseView: 'front',
      //copy: this.copy,

      // mail form fields
      contactResource: this.$resource('contact'),
      registrationVisible: true,
      senderName: '',
      senderEmail: '',
      subject: '',
      message: '',
    }
  },
	store,
	vuex:{
		getters:{ 
      copy: ({copyText}) => copyText.all,
			company: getCompanyDetails,
			settings: getPublicSettings
		},
		actions:{
			setSetting,
      toggleSetting,
      setCopy,
      setFeatures,
      setMenu,
    },
  },

  computed: {
    contactReady(){
      if( this.senderName != '' && this.senderName.length >= 4 && 
          this.senderEmail != '' && this.senderEmail.indexOf('@') >- 0 &&
          this.subject != '' && this.subject.length >= 10 &&
          this.message != '' && this.message.length >= 10 
        ){
        this.setSetting('contactFormReady', true)
        return true;
      }
      this.setSetting('contactFormReady', false)
      return false;
    }
  }, 

  methods:{
    //objectMethods: require('./vue/control/objectMethods.js'),
    addNavButton(){
      this.navPage.menuLayout.push({
        icon: "fa-user",
        href: "#1",
        label: "Inventory",
        class: "btn btn-active-success btn-default btn-dashboard",
        notification_text: "2",
        notification_style: "",
        notification_color: "primary"
      })
    },
    editButton(obj){ 
      var formId = obj.id;
      var saveIt = this.saveObject;
      var deleteIt = this.deleteObject;
      bootbox.dialog({
        className: 'modal-primary',
        title: 'Editor',
        message: "<div id='bootbox-modal'></div>",
        closeButton: false,
        animateIn: 'zoomIn',
        animateOut: 'zoomOut',
        buttons: {
          success: {
            label: "Save",
            className: "btn-primary",
            callback() {
              saveIt(obj.id);
              $('#object-'+obj.id+'-editing-form').appendTo('#'+obj.id+'-form-holder');
            }
          },
          close: {
            label: "Close",
            className: "btn-warning",
            callback() {
              $('#object-'+obj.id+'-editing-form').appendTo('#'+obj.id+'-form-holder');
            }
          },
          delete: {
            label: "Delete",
            className: "btn-danger",
            callback() {
              deleteIt(obj.id);
            }
          },
        }
      });
      $('#object-'+obj.id+'-editing-form').appendTo("#bootbox-modal");
      $('#selectpicker-'+obj.id).chosen();
      var currentIcon = obj.icon;
      $('#chosen-fa-icon-'+obj.id).addClass(currentIcon);
      $('#selectpicker-'+obj.id).on('change', function(evt, params) {
        console.log(currentIcon, " - ", params.selected);
        $('#chosen-fa-icon-'+obj.id).removeClass(currentIcon);
        $('#chosen-fa-icon-'+obj.id).addClass(params.selected);
        currentIcon = params.selected;
      });
      obj.icon = currentIcon; 
    },

    deleteObject (id) {
      this.objectResource.delete(
        {objectType: 'interfaceObject', objectOptions: id},{ objectOptions: id},
        function (data, status, request) {
          //handle success
      }).error(function (data, status, request) {
          //handle error
      })
    },

    saveObject (id) {
      var objectResource = this.objectResource;
      $('#object-'+id+'-editing-form').on( 'submit', 
        function(e) {
          e.preventDefault(); 
          var objectData = $( this ).serializeArray();
          console.log(objectData);
          objectResource.update(
            {objectType: "interfaceObjects", objectOptions: id},
            {objectData}, 
            function (data, status, request) {
              $.niftyNoty({type: 'info',icon : 'fa fa-check',message : '<strong>Button Saved!</strong>. ',container : 'page',timer : 3000});
            }).error(function (data, status, request) {
              console.log("Something went wrong with (mainnavbutton.js->addButton->objectArray.save) Error Stat = "+status+" here is the request = "+request)
          });
      }).submit();
    },


    contactForm(e){
            e.preventDefault();
            var contact = {
                name: this.senderName,
                email: this.senderEmail,
                subject: this.subject,
                message: this.message,
            }

            var form_status = $('<div class="form_status"></div>');
            $('#main-contact-form').prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
           
            this.contactResource.save( contact, 
            function (data) 
            { 
                swal('Thank you!', 'We will be in touch.', 'success');
            }
            ).error(function (data, status, request) 
            { 
               form_status.html('<p class="text-danger">There was a problem sending your message please try an email or call</p>').delay(3000).fadeOut();
            })  
        },

    /*
    * Called from buttons dispaches 
    * to function in child.button.created()
     */
    updateMenu(button){
      this.$broadcast('checkButton', button)
    },


		save() {
			// console.log('loggedIn ?');
			// console.log(this.setSetting);
      // this.setSetting('loggedIn') 
			// console.log('loggedIn ?');
			// console.log(this.setSetting.loggedIn);
			// this.editPage = true;
		},

    toggleAside(){
      this.toggleSetting('asideOpen')
    },
    togglePrimary(){
      this.toggleSetting('primaryOpen')
    },

		login(e) { 
			if(this.settings.loggedIn){
        this.toggleSetting('loggedIn') 
        this.toggleSetting('editMode') 
      } else { 
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
            if (inputValue === "im ok") {
                console.log('Password Correct')
              	that.toggleSetting('loggedIn') 
  							that.toggleSetting('editMode') 
                //Login Success handler
                swal({
                  title: "Logged In", 
                  closeOnConfirm: false,
                  showCancelButton: true,
                  confirmButtonText: 'Go to Admin Panel',
                  cancelButtonText: 'Edit Page',
                  type:'success',
                },function(isConfirmed){
                  if(isConfirmed){window.location.replace('modelAdmin')}
                }); //End Login Success handler
              };
            }
          );// End admin button sweet alert
        }// End Else
    },// End adminlogin
    loadMenus(){
      var that =this
      this.objectResource.get(
        {objectType:"interfaceObjects", objectOptions:"navpage.DashboardMenu"},
        function (menu, status, request) {
          console.log("%cloadMenus() menu data fetched in Truth",this.settings.logGood);
          that.setMenu('DashboardMenu', menu);
      }).error(function (data, status, request) {
        console.log("%c loadMenus() Errrrrr in Truth",this.$root.logErr);
      })
      this.objectResource.get(
        {objectType:"interfaceObjects", objectOptions:"navigation.adminPrimary"},
        function (menu, status, request) {
          console.log("%cloadMenus() menu data fetched in Truth",this.settings.logGood);
          that.setMenu('adminPrimary', menu);

          if(that.base_view == 'dashboard'){ nifty.mainNav.unbindSmallNav() };
      }).error(function (data, status, request) {
        console.log("%c loadMenus() Errrrrr in Truth",this.$root.logErr);
      })
    },
    loadCopy(){
      var that =this
      this.$http.get('/api/copyText',
        function (data, status, request) {
          console.log("%c loadCopy() in mei-app.js",that.$root.settings.logGood);
          that.setCopy(data[1]);
        }).error(function (data, status, request) {
          console.log("%c loadCopy() Err in mei-app.js", that.$root.settings.logErr);
        })
    },
    loadFeatures(){
      var that =this
      this.$http.get('/api/feature',
        function (data, status, request) {
          console.log("%c loadFeatures() in mei-app.js",that.$root.settings.logGood);
          that.setFeatures(data[1]);
        }).error(function (data, status, request) {
          console.log("%c loadFeatures() Err in mei-app.js", that.$root.settings.logErr);
        })
    },
	},
  ready(){
    this.loadMenus()
    this.loadCopy()
    this.loadFeatures()
    //this.copyObject = this.routePrefix[this.instanceNumber]
    this.$watch('getPublicSettings', function(){
      this.settings = this.getPublicSettings
    }, { deep: true })
  }

}
