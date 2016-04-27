import Persistance from '../api/vuex/persistance.js'

var data = Persistance.get();

var truth = {
		settings: require('./settingsData'),
		
		company: require('./companyData'),

		posts: require('./newsData'),
		
		conversations: require('./conversationData'),
		
		menus: {
			primary: require('./mainMenuData'),
			adminPrimary: require('./adminMenuData'),
		},
		
		copyText:  require('./copyText'),
		
		events: require('./eventsData'),

		infoSection: require('./infoSectionData'),
		
		images: require('./imagesData'),

		features: require('./features'),
}  


export default function(){
	if(data.length){
		return data;
	} else {
		return truth;
	}
}