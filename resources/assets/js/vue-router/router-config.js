import InventoryCalculator from '../vue/components/inventory/Inventorycalculator.vue';
//import mainview from '../vue/mainview.js'; 
import Profile from '../vue/components/profile/Profile.vue'
import Projector from '../vue/components/projector/Projector.vue'
import Communications from '../vue/components/converse/Communications.vue';
import SingleConversation from '../vue/components/converse/SingleConversation.vue';
import NavPage from '../vue/components/navigation/Navpage.vue';
import Pos from '../vue/components/pos/Checkout.vue';
import Calendar from '../vue/components/calendar/Calendar.vue';
import Settings from '../vue/components/settings/Settings.vue';
import CustomerNew from '../vue/components/customer/New.vue';
import Customers from '../vue/components/customer/Customers.vue';
import EmployeeNew from '../vue/components/employee/New.vue';
import Employees from '../vue/components/employee/Employees.vue';
import Inventory from '../vue/components/inventory/Inventory.vue';
import UiUx from '../vue/components/controllers/UiUxPage.vue';
import UiUxButtons from '../vue/components/controllers/UiUxButtons.vue';
import UiUxCharts from '../vue/components/controllers/UiUxCharts.vue';
import TicketsIt from '../vue/components/pages/TicketsIt.vue';

//import loadjs from 'partition-bundle';


export function configRouter (router) {

  // normal routes
  router.map({
    
    '/': {
      component: NavPage, 
      name: 'Welcome',
    },
    '/': {
      component: NavPage, 
      name: 'welcome',
    },
    '/dashboard': {
      component: {
        name: 'Dashboard',
        template: '<div><h3>dashboard</h2><router-view></router-view></div>',
        changeTabTitle: false,
        logHooksToConsole: true,
        watchMode: true,
        data() {
          return {
            pageTitle: 'Dashboard',

          }
        },
      }, 
      canReuse: true,
      name: 'Dashboard',
      subRoutes: {  
        '/': {
          component: NavPage, 
          name: 'welcome',
        },
        '/home': {
           component: NavPage,
           name: 'Home',
        },
        '/pos': {
          // component: function (resolve) {
          //   loadjs([Pos], resolve)
          // },
          component: Pos,
          name: 'Pos',
        },

        '/customers': {
           component: Customers,
           name: 'Customers',
        },
        '/inventory/calculator': {
           component: InventoryCalculator,
           name: 'InventoryCalculator',
        },

        '/profile': {
           component: Profile,
           name: 'Profile',
           subRoutes: { 
            '/projects': {
               component: Projector,
               name: 'Projects',
            },
            '/communications': {
               component: Communications,
               name: 'Communications',
            },
            '/singleConversation': {
               component: SingleConversation,
               name: 'SingleConversation',
            },
            '/calendar': {
               component: Calendar,
               name: 'Calendar',
            },
            '/settings': {
               component: Settings,
               name: 'Settings',
            },
          }
        },
        '/customer/new': {
           component: CustomerNew,
           name: 'CustomerNew',
        },
        '/employees': {
           component: Employees,
           name: 'Employees',
        },
        '/employee/new': {
           component: Inventory,
           name: 'EmployeeNew',
        },
        '/employee': {
           component: Employees,
           name: 'EmployeeDirectory',
        },
        '/inventory': {
           component: Inventory,
           name: 'Inventory',
        },
        '/ui': {
           component: UiUx,
           name: 'UiUx',
        },
        '/ui/buttons': {
           component: UiUxButtons,
           name: 'UiUxButtons',
        },
        '/ui/charts': {
           component: UiUxCharts,
           name: 'UiUxCharts',
        },

        '/help-desk': {
          component: TicketsIt, 
          name: 'HelpDesk',
        },
      },// dashboard sub route close
    }, //dashboard close

    

  // '*': {
  //     component: require('./components/not-found.vue')
  //   },
  })




  // redirect
  router.redirect({
    '/info': '/',
    //'/tickets': '/help-desk',
    //'tickets': '/help-desk',
  })




  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  // router.beforeEach((transition) => {
  //   //console.log('Bang from beforeEach transition')
  //   if (transition.to.path === '/dashboard') {
  //     router.app.authenticating = true
  //     setTimeout(() => {
  //       router.app.authenticating = false
  //       alert('this route is forbidden by a global before hook')
  //       transition.abort()
  //     }, 3000)
  //   } else {
  //     transition.next()
  //   }
  // })
}