//import Persistance from '../api/vuex/persistance.js'

//var data = Persistance.get();

export default {
		settings: require('./settingsData'),
		
		company: require('./companyData'),

		posts: require('./newsData'),
		
		conversations: require('./conversationData'),
		
		menus: {
			primary: require('./mainMenuData'),
			adminPrimary: require('./adminMenuData'),
			DashboardMenu: {},
		},
		
		copyText:  require('./copyText'),
		
		events: require('./eventsData'),

		infoSection: require('./infoSectionData'),
		
		images: require('./imagesData'),

		features: require('./features'),
}  


//  function(){
// 	console.log(truth)
// 	// if(data.length){
// 	// 	return data;
// 	// } else {
// 		return truth;
// 	// }
// }