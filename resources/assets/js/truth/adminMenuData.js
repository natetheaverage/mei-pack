// Setting for the main menu 
module.exports = [
		{
			id: 0,
			menu_name: 'primary',
			active: false,
			label: 'Home',
			url: '/home',
			sub: [
				{
					id: 14,
    			active: false,
    			label: 'About TOTO',
    			url: '/about',
  			},{
  				id: 15,
    			active: false,
    			label: 'News',
    			url: '/news',
  			},{
  				id: 16,
    			active: false,
    			label: 'Contact',
    			url: '/shout',
  			},
			],
		},{
			id: 1,
			menu_name: 'primary',
			active: false,
			label: 'Events',
			url: '/events',
			sub: [
				{
					id: 5,
    			active: false,
    			label: 'Deer Pile',
    			url: 'deer-pile',
  			},{
  				id: 6,
    			active: false,
    			label: 'Mercury Cafe',
    			url: 'mercury-cafe',
  			},
			],
		},{
			id: 2,
			menu_name: 'primary',
			active: false,
			label: 'Particapate',
			url: '/particapate',
			sub: [
				{
					id: 7,
    			active: false,
    			label: 'Meet Up Details',
    			url: 'meetup',
  			},{
  				id: 8,
    			active: false,
    			label: 'Donate',
    			url: 'donations',
  			},
			],
		},{
			id: 3,
			menu_name: 'primary',
			active: false,
			label: 'Communication',
			url: '/comunication',
			sub: [
				{
					id: 9,
    			active: false,
    			label: 'Shout To Us',
    			url: 'shout',
  			},{
  				id: 10,
    			active: false,
    			label: 'Group Conversations',
    			url: 'conversations',
  			},
			],
		},{
			id: 4,
			menu_name: 'primary',
			active: false,
			label: 'Group Assets',
			url: '/group-assets',
			sub: [
				{
					id: 11,
	  			active: false,
	  			label: 'Glossery',
	  			url: 'glossery',
				},{
					id: 12,
	  			active: false,
	  			label: 'Theater Games',
	  			url: '/theater-games',
				},{
					id: 13,
	  			active: false,
	  			label: 'Media Gallery',
	  			url: '/media-gallery',
				},
			],
		},
]