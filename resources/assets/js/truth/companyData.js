// Static Settings for Brand Identity
module.exports = {
	name:'Twenty Twenty',
	addresses:
	[{
		label: "Main Office",
		type: "Office",
		active: true,
		street: "123 Anywhere Drive",
		unit: "#456",
		city: "Dust City",
		state: "Mainaware",
		zip: "87654",
	}],
	contacts:
	{
		phones:
		[{
			label:"Office",
			type: "landLine",
			active: true,
			number: "123-456-7890",
			ext: "",
		},{
			label:"Fax",
			type: "fax",
			active: true,
			number: "123-456-7890",
			ext: "",
		}],
		emails:
		[{
			label:"Denver",
			type: "main",
			active: true,
			emailAddress: "us@here.com",
			user_id: "",
		},{
			label:"Tech Support",
			type: "I.T.",
			active: true,
			emailAddress: "us@here.com",
			user_id: "",
		}],
	},
	branding:{
		name: "20/20 Investment",
		tagLine:"Your key to financial success in the medical market!",
		smallLogo:'/images/logos/logo.png',
		largeLogo:'/images/logos/logo.png',
	}
}