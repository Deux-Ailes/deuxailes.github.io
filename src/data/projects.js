// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'RRCX',
		category: 'Logicel',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'SIGL',
		category: 'Application Web',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'CarnetFacile',
		category: 'Application Web',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'NVH',
		category: 'Logiciel',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'CaracExport',
		category: 'Logiciel',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'CoinAPI',
		category: 'Autre',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
