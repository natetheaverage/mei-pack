// Setting for the main menu 
module.exports = [
		{
			id: 0,
			type: 'primary',
			hovering: false,
			label: 'Home',
			url: '/home',
			sub: [
				{
					id: 14,
    			hovering: false,
    			label: 'About TOTO',
    			url: '/about',
  			},{
  				id: 15,
    			hovering: false,
    			label: 'News',
    			url: '/news',
  			},{
  				id: 16,
    			hovering: false,
    			label: 'Contact',
    			url: '/shout',
  			},
			],
		},{
			id: 1,
			type: 'primary',
			hovering: false,
			label: 'Events',
			url: '/events',
			sub: [
				{
					id: 5,
    			hovering: false,
    			label: 'Deer Pile',
    			url: 'deer-pile',
  			},{
  				id: 6,
    			hovering: false,
    			label: 'Mercury Cafe',
    			url: 'mercury-cafe',
  			},
			],
		},{
			id: 2,
			type: 'primary',
			hovering: false,
			label: 'Particapate',
			url: '/particapate',
			sub: [
				{
					id: 7,
    			hovering: false,
    			label: 'Meet Up Details',
    			url: 'meetup',
  			},{
  				id: 8,
    			hovering: false,
    			label: 'Donate',
    			url: 'donations',
  			},
			],
		},{
			id: 3,
			type: 'primary',
			hovering: false,
			label: 'Communication',
			url: '/comunication',
			sub: [
				{
					id: 9,
    			hovering: false,
    			label: 'Shout To Us',
    			url: 'shout',
  			},{
  				id: 10,
    			hovering: false,
    			label: 'Group Conversations',
    			url: 'conversations',
  			},
			],
		},{
			id: 4,
			type: 'primary',
			hovering: false,
			label: 'Group Assets',
			url: '/group-assets',
			sub: [
				{
					id: 11,
	  			hovering: false,
	  			label: 'Glossery',
	  			url: 'glossery',
				},{
					id: 12,
	  			hovering: false,
	  			label: 'Theater Games',
	  			url: '/theater-games',
				},{
					id: 13,
	  			hovering: false,
	  			label: 'Media Gallery',
	  			url: '/media-gallery',
				},
			],
		},
]