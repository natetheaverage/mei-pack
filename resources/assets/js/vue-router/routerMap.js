module.exports = {
    '/': {
        component: require('../vue/components/navigation/NavPage.vue'), 
        name: 'welcome',
    },
    '/dashboard': {
        component: require('../vue/components/navigation/NavPage.vue'), 
        name: 'dashboard',
    },
    '/dashboard/pos': {
         component: require('../vue/components/pos/Checkout.vue'),
         name: 'Pos',
     },
}
     // '/home': {
     //     component: NavPage,
     //     name: 'home',
     //},
     // '/customers': {
     //     component: '',
     //     name: 'Customers',
     // },
     // '/employees': {
     //     component: '',
     //     name: 'Employees',
     // },
     // '/inventory/calculator': {
     //     component: '',
     //     name: 'InventoryCalculator',
     // },
     // '/projects': {
     //     component: '',
     //     name: 'Projector',
     // },
     // '/communications': {
     //     component: '',
     //     name: 'Communications',
     // },
     // '/singleConversation': {
     //     component: '',
     //     name: 'SingleConversation',
     // },
     
	//}
