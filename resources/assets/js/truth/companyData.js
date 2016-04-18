// Static Settings for Brand Identity
module.exports = {
	name:'20-20 Investing',
	addresses:
	[{
		label: "Main Office",
		type: "Office",
		active: false,
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
			active: false,
			number: "123-456-7890",
			ext: "",
		},{
			label:"Message",
			type: "tech",
			active: false,
			number: "123-453-7890",
			ext: "",
		},{
			label:"Fax",
			type: "fax",
			active: false,
			number: "123-456-7890",
			ext: "",
		}],
		emails:
		[{
			label:"General Inqueries",
			type: "main",
			active: true,
			emailAddress: "contactus@20-20investing.com",
			user_id: "",
		},{
			label:"Tech Support",
			type: "I.T.",
			active: false,
			emailAddress: "us@here.com",
			user_id: "",
		}],
	},
	branding:{
		name: "20-20 Investment",
		tagLine:"Your key to financial success in the medical market!",
		smallLogo:'/images/logos/logo.png',
		largeLogo:'/images/logos/logo.png',
	}
}