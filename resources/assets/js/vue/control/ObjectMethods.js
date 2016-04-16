module.exports = {
  bang(){return "BANG!"},
  
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
    editButton(id){ 
      var formId = id;
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
                  saveIt(id);
                  $('#object-'+id+'-editing-form').appendTo('#'+id+'-form-holder');//.submit();
              }
          },
          close: {
              label: "Close",
              className: "btn-warning",
              callback() {
                  $('#object-'+id+'-editing-form').appendTo('#'+id+'-form-holder');
              }
          },
          delete: {
            label: "Delete",
            className: "btn-danger",
            callback() {
              deleteIt(id);
              }
          },
        }
      });
      $('#object-'+id+'-editing-form').appendTo("#bootbox-modal");
      $('#selectpicker-'+id).chosen();
      var currentIcon = this.object.icon;
      $('#chosen-fa-icon-'+id).addClass(currentIcon);
      $('#selectpicker-'+id).on('change', function(evt, params) {
        console.log(currentIcon, " - ", params.selected);
        $('#chosen-fa-icon-'+id).removeClass(currentIcon);
        $('#chosen-fa-icon-'+id).addClass(params.selected);
        currentIcon = params.selected;
      });
      this.object.icon = currentIcon; 
    },

      deleteObject (id) {
            this.objectResource.delete({objectType: 'interfaceObject', objectOptions: id},{ objectOptions: id}, function (data, status, request) {
                //handle success
            }).error(function (data, status, request) {
                //handle error
            })
      },

      saveObject (id) {
          var buttonResource = this.objectResource;
          $('#object-'+id+'-editing-form').on( 'submit', 
            function(e) {
              e.preventDefault(); 
              var buttonData = $( this ).serializeArray();
              console.log(buttonData);
              buttonResource.update(
                {objectType: "interfaceObjects", objectOptions: id},
                {buttonData}, 
                function (data, status, request) {
                  $.niftyNoty({type: 'info',icon : 'fa fa-check',message : '<strong>Button Saved!</strong>. ',container : 'page',timer : 3000});
              }).error(function (data, status, request) {
                  console.log("Something went wrong with (mainnavbutton.js->addButton->objectArray.save) Error Stat = "+status+" here is the request = "+request)
              });
        }).submit();
      },
}