// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'RRCX',
		category: 'Logiciel',
		img: require('@/assets/images/projets/RRCX.jpeg'),
	},
	{
		id: 2,
		title: 'SIGL',
		category: 'Application Web',
		img: require('@/assets/images/projets/Alternapp.png'),
	},
	{
		id: 3,
		title: 'NVH',
		category: 'Logiciel',
		img: require('@/assets/images/projets/NVH.jpeg'),
	},
	{
		id: 4,
		title: 'CaracExport',
		category: 'Logiciel',
		img: require('@/assets/images/web-project-1.jpg'),
	},
	{
		id: 5,
		title: 'CoinAPI',
		category: 'Mobile',
		img: require('@/assets/images/projets/coinRanking.png'),
	},
];

export default projects;
