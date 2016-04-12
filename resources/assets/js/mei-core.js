import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
Vue.use(VueResource)
Vue.use(VueTouch)


// REQUESTS HEADER
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

import MainMenu from './vue/components/materialTheme/MainMenu.vue';
Vue.component('mainmenu', MainMenu)
import MenuButton from './vue/components/materialTheme/MenuButton.vue';
Vue.component('menubutton', MenuButton)
import SubMenuButton from './vue/components/materialTheme/SubMenuButton.vue';
Vue.component('submenubutton', SubMenuButton)
 
import BrandBox from './vue/partials/BrandBox.vue';
Vue.component('brand-box', BrandBox)
import BlueHero from './vue/partials/BlueHero.vue';
Vue.component('blue-hero', BlueHero)
import AnimatedWords from './vue/components/animate/AnimatedWords.vue';
Vue.component('animated-words', AnimatedWords)

import IntroFlyAway from './vue/components/animate/IntroFlyAway.vue';
Vue.component('intro-fly-away', IntroFlyAway) 

// import DatesBox from './vue/components/events/DatesBox.vue';
// Vue.component('dates_box', DatesBox)
// import EventPage from './vue/components/events/EventPage.vue';
// Vue.component('event_page', EventPage)
// import EventTickets from './vue/components/events/EventTickets.vue';
// Vue.component('event_tickets', EventTickets)
// import FloorPlans from './vue/components/events/FloorPlans.vue';
// Vue.component('floorplans', FloorPlans)
// import EventFullDetailTabs from './vue/components/events/EventFullDetailTabs.vue';
// Vue.component('event_full_detail_tabs', EventFullDetailTabs)
// import EventFullDetails from './vue/components/events/EventFullDetails.vue';
// Vue.component('event_full_details', EventFullDetails)
// import ForwordBackwordLinks from './vue/components/events/ForwordBackwordLinks.vue';
// Vue.component('forword_backword_links', ForwordBackwordLinks)
// import GalleryImage from './vue/components/image/GalleryImage.vue';
// Vue.component('gallery_image', GalleryImage) 

// import MapBox from './vue/components/controllers/MapBox.vue';
// Vue.component('map_box', MapBox)
// import AddressForm from './vue/components/form/AddressForm.vue';
// Vue.component('address_form', AddressForm)
// import ContactsForm from './vue/components/form/ContactsForm.vue';
// Vue.component('contacts_form', ContactsForm)
// import OptionsForm from './vue/components/form/OptionsForm.vue';
// Vue.component('options_form', OptionsForm)
// import Registration from './vue/components/form/Registration.vue';
// Vue.component('registration', Registration)
// import RegistrationCities from './vue/components/form/RegistrationCities.vue';
// Vue.component('registration_cities', RegistrationCities)

// import RollOverTextBtn from './vue/components/animate/RollOverTextBtn.vue';
// Vue.component('rollovertextbtn', RollOverTextBtn)
// import Submission from './vue/components/form/PostSubmission.vue';
// Vue.component('submission', Submission)
// import Content from './vue/components/news/NewsFeed.vue';
// Vue.component('content', Content)
// import Single from './vue/components/news/Single.vue';

// import iPad3DMenu from './vue/components/animate/iPad3DMenu.vue';
// Vue.component('ipad_3d_menu', iPad3DMenu) 


// Vue.component('single', Single)
// import Disqus from './vue/components/converse/Disqus.vue';
// Vue.component('disqus', Disqus)
// import Login from './vue/components/form/Login.vue';
// Vue.component('login', Login)

// import Post from './vue/components/news/Post.vue';
// Vue.component('post', Post)

// import CurrencyDisplay from './vue/filters/Currency.js';
// Vue.filter('currencyDisplay', CurrencyDisplay)

// import HooksMixin from './vue/mixins/HooksMixin.js';
// Vue.mixin(HooksMixin)
// import SettingsWatcher from './vue/mixins/SettingsWatcher.js';
// Vue.mixin(SettingsWatcher)


//import MainNav from './vue/components/navigation/nifty/MainNav.vue';
//Vue.component('dashmainnav', require('./vue/components/navigation/nifty/MainNav.vue'));

import NavPage from './vue/components/navigation/NavPage.vue'
Vue.component('home', NavPage );

// import MainNavButton from './vue/components/navigation/nifty/MainNavButton.vue';
// Vue.component('mainnavbutton', MainNavButton )

// import ObjectEditor from './vue/components/controllers/ObjectEditor.vue';
// Vue.component('objecteditor', ObjectEditor )

// import Project from './vue/components/projector/Project.vue'
// Vue.component('project', Project )

// import Tasks from './vue/components/projector/Tasks.vue'
// Vue.component('tasks', Tasks )

// import Task from './vue/components/projector/Task.vue'
// Vue.component('task', Task )

// import Conversations from './vue/components/Converse/Conversations.vue';
// Vue.component('conversations', Conversations )

// import Conversation from './vue/components/converse/Conversation.vue';
// Vue.component('conversation', Conversation )

// import NewsConversation from './vue/components/converse/NewsConversation.vue';
// Vue.component('newsconversation', NewsConversation )

// import SingleConversation from './vue/components/converse/SingleConversation.vue';
// Vue.component('singleconversation', SingleConversation )

// import Message from './vue/components/converse/Message.vue';
// Vue.component('message', Message )

// import VisibilitySwitch from './vue/components/controllers/VisibilitySwitch.vue';
// Vue.component('visibilityswitch',  VisibilitySwitch )

// import NavPageButton from './vue/components/navigation/NavpageButton.vue';
// Vue.component('navpagebutton',  NavPageButton )

// import VisibilityMode from './vue/filters/VisibilityMode.js';
// Vue.filter('visibilityMode', VisibilityMode)

// import CurrencyDisplay from './vue/filters/Currency.js';
// Vue.filter('currencyDisplay', CurrencyDisplay)

// import HooksMixin from './vue/mixins/HooksMixin.js';
// Vue.mixin(HooksMixin);

// import SettingsWatcher from './vue/mixins/SettingsWatcher.js';
// Vue.mixin(SettingsWatcher);

import MeiApp from './mei-app.js'

import Test from './modules/Test.vue'
Vue.component('test', Test)

module.exports = new Vue(MeiApp).$mount('body')



var $head = $( '#ha-header' );
	$( '.ha-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'ha-header ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$head.attr('class', 'ha-header ' + animClassUp);
		}
	}, { offset: '100%' } );
} );