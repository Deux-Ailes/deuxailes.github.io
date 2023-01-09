<script>
import feather from 'feather-icons';
import ProjectHeader from '../../components/projects/ProjectHeader.vue';
import ProjectGallery from '../../components/projects/ProjectGallery.vue';
import ProjectInfo from '../../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Carac Export',
				singleProjectDate: '1 Sept 2022',
				singleProjectTag: 'Logiciel',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/web-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'Contexte',
				companyInfos: [
					{
						id: 1,
						title: 'Compagnie',
						details: 'Hitachi Astemo',
					},
					{
						id: 2,
						title: 'Service',
						details: 'Qualité',
					}
				],
				objectivesHeading: 'Objectif',
				objectivesDetails:	"L'exportation de données de tests était dépendante d'une solution externe. Lente et non personnalisable, la création d'une nouvelle solution devenanit indispensable.",
					technologies: [
					{
						title: 'Outils et Technologies',
						techs: [
							'Excel',
							'VBA',
							'Python',
							'C#',
							'Visual Studio',
							'Anaconda'
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							"Lors de tests de caractérisation de frein, des données sont acquises depuis les capteurs afin d'établir un procès-verbal (PV) qui justifie, en fonction des critères établis par le client, la conformité d'un frein."
					},
					{
						id: 2,
						details:
							"Dans un but de visualisation statistique et pour mieux observer l'évolution des ''performances'' d'un frein, il est plus intéressant d'observer l'ensemble des tests effectués sur un frein que chaque PV individuellement."
					},
					{
						id: 3,
						details:
							"J'ai développé une solution permettant d'analyser chaque test. En fonction de la pièce caractérisée, du frein et du type de caractérisation, les données sont ensuites exportées dans une base de données locale."		
					},
					{
						id: 4,
						details:
							"Le logiciel de visualisation vient extraire les données directement depuis la base et va permettre d'afficher ces dernières sous forme de graphes. Des outils statistiques sont à venir pour permettre d'évaluer la répartition des données, indiquer les limites et le 6 sigmas."							
					},
				],
				
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
