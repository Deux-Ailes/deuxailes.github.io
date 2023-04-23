<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: "Quelques diplômes et certifications que j'ai obtenu",
			clients: [
				{
					id: 1,
					title: "Diplôme d'Ingénieur généraliste - ESEO",
					img: require('@/assets/images/formations/eseo.jpg'),
				},
				{
					id: 2,
					title: 'DUT GEII',
					img: require('@/assets/images/formations/geii.jpg'),
				},
				{
					id: 4,
					title: 'TOEIC',
					img: require('@/assets/images/formations/TOEIC_logo.png'),
				},
				{
					id: 5,
					title: 'Voltaire',
					img: require('@/assets/images/formations/voltaire.png'),
				}
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
