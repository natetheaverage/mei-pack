/*
*  Button Wizzard using sweetalert.js
*   resources/assets/js/ui
 */
export var SweetAlertButtonEditor = (function () {
  swal(
    {   
      title: "An input!",   
      text: "Write something interesting:",   
      type: "input", 
      inputType: "text",  
      showCancelButton: true,   
      closeOnConfirm: false,   
      animation: "slide-from-top",   
      inputPlaceholder: "Write something" 
    }, 
      function(inputValue){   
        if (inputValue === false) return false;      
        if (inputValue === "") {     
          swal.showInputError("You need to write something!");     
          return false   
        }      
        swal("Nice!", "You wrote: " + inputValue, "success"); 
      });
      return {
        menu_id: '1',                // id for The Menu this belongs to
        menu_name: 'MainNavigation', //-- its name
        menu_order: 0,               //-- where in the order does this belong
        family: 'button',            // The family the object belongs to (box, form, button etc...
        type: 'navigation',          // Type of object in the family
        class: 'arrow',              // Class of the object
        label: 'New Button',         // header / Label displayed
        icon: 'fa-user',             // icon from fa-
        href: '#',                   // target for links
        extra1: '',                  // ???
        extra2: 'hasSub',            // ???
        owner_id: 1,                 // id if this object requires an owner
        owner_type: 'King'           //-- owner type ( this doesn't need to be a user)
      };
    
  })
