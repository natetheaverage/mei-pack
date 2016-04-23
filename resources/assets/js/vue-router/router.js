import InventoryCalculator from '../vue/components/inventory/Inventorycalculator.vue';
//import mainview from '../vue/mainview.js'; 
import Communications from '../vue/components/converse/Communications.vue';
import SingleConversation from '../vue/components/converse/SingleConversation.vue';
import NavPage from '../vue/components/navigation/Navpage.vue';
import Pos from '../vue/components/pos/Checkout.vue';
import Calendar from '../vue/components/calendar/Calendar.vue';
import Settings from '../vue/components/settings/Settings.vue';
import CustomerNew from '../vue/components/customer/New.vue';
import Customers from '../vue/components/customer/Customers.vue';
import EmployeeNew from '../vue/components/employee/New.vue';
import Inventory from '../vue/components/inventory/Inventory.vue';
import UiUx from '../vue/components/controllers/UiUxPage.vue';
import UiUxButtons from '../vue/components/controllers/UiUxButtons.vue';
import UiUxCharts from '../vue/components/controllers/UiUxCharts.vue';
import TicketsIt from '../vue/components/pages/TicketsIt.vue';


export function configRouter (router) {
alert('vue-router/router.js called??? but why and more importantly who???');
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
        component: NavPage, 
        name: 'Dashboard',
    },
    '/dashboard/pos': {
         component: Pos,
         name: 'Pos',
     },
     '/dashboard/home': {
         component: NavPage,
         name: 'home',
     },
     '/dashboard/customers': {
         component: Customers,
         name: 'Customers',
     },
     '/dashboard/inventory/calculator': {
         component: InventoryCalculator,
         name: 'InventoryCalculator',
     },
     '/dashboard/projects': {
         component: Projector,
         name: 'Projects',
     },
     '/dashboard/communications': {
         component: Communications,
         name: 'Communications',
     },
     '/dashboard/singleConversation': {
         component: SingleConversation,
         name: 'SingleConversation',
     },
     '/dashboard/calendar': {
         component: Calendar,
         name: 'Calendar',
     },
     '/dashboard/settings': {
         component: Settings,
         name: 'Settings',
     },
     '/dashboard/customer/new': {
         component: CustomerNew,
         name: 'CustomerNew',
     },
     '/dashboard/employees': {
         component: Employees,
         name: 'Employees',
     },
     '/dashboard/employee/new': {
         component: Inventory,
         name: 'EmployeeNew',
     },
     '/dashboard/employee': {
         component: Employees,
         name: 'EmployeeDirectory',
     },
     '/dashboard/inventory': {
         component: Inventory,
         name: 'Inventory',
     },
     '/dashboard/ui': {
         component: UiUx,
         name: 'UiUx',
     },
     '/dashboard/ui/buttons': {
         component: UiUxButtons,
         name: 'UiUxButtons',
     },
     '/dashboard/ui/charts': {
         component: UiUxCharts,
         name: 'UiUxCharts',
     },
    'help-desk/active': {
        component:TicketsIt,
        name: 'TicketsActive',
        
     },
     'help-desk/admin': {
        component: TicketsIt,
        name: 'TicketsAdmin'
     },
     'help-desk': {
        component: TicketsIt,
        name: 'TicketsAdmin'
     },

  // '*': {
  //     component: require('./components/not-found.vue')
  //   },
  })




  // redirect
  router.redirect({
    '/info': '/',
    //'/hello/:userId': '/user/:userId'
  })




  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}