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
      viewTitle: 'Dashboard',
      //copy: this.copy,
      registrationVisible: true,

      socket: io.connect('http://192.168.10.10:3000'),

      // CurrentUser
      user: {
        username: 'UserName: in mei-app.js'
      },
      profile: {},
      customer_info: {},
      employee_info: {},
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
    

    userFields(){
      this.user = (window).mei.currentUser
      //console.log(this.user)
      this.profile = this.user.profile
      this.customer_info = this.user.customer_info
      this.employee_info = this.user.employee_info
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
        //console.log(currentIcon, " - ", params.selected);
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
          objectResource.update(
            {objectType: "interfaceObjects", objectOptions: id},
            {objectData}, 
            function (data, status, request) {
              $.niftyNoty({type: 'info',icon : 'fa fa-check',message : '<strong>Button Saved!</strong>.'+data,container : 'page',timer : 3000});
            }).error(function (data, status, request) {
              console.log("Something went wrong with (mainnavbutton.js->addButton->objectArray.save) Error Stat = "+status+" here is the request = "+request)
          });
      }).submit();
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

    setTickets(){
       if(this.$route.path.indexOf('help-desk') > 0){
        //this.setTickets(true);
        this.setSetting('helpDeskVisible', true)
      } else {
        //this.setTickets(false);
        this.setSetting('helpDeskVisible', false)
      }
      
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
  components:{
    'tickets':{
      name:"TicketContainer",
      template: $('tickets-container')
    }
  },
  ready(){
    this.loadMenus()
    this.loadCopy()
    this.loadFeatures()

  //var socket = io.connect('http://192.168.10.10:3000');
  // this.socket.on('message-channel:App\\Events\\Conversations\\MessageSent', 
  //   function(data){
  //     console.log('[mei-app.js] '+data.message.name+' sent quick from mailer message!')
  // })
  // .on('message-channel:thisHappened', function(message){
  //   console.log(message)
  //   socket.emit('bang', this.user)
  // }.bind(this))
  

    this.setTickets() 
    //this.copyObject = this.routePrefix[this.instanceNumber]
    this.$watch('settings', function(){},{deep:true})
    
    this.$watch('$route.path', function(route){ 
      this.setTickets() },{ deep: true }
    )


    // socket.on('message-channel:thisHappened', function(message){
    //   console.log(message)
    // }.bind(this))


  }

}
