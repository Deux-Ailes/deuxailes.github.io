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
				singleProjectTitle: 'NVH',
				singleProjectDate: '1 Sept 2022',
				singleProjectTag: 'Logiciel / Mecanique',
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
				objectivesDetails:	"Le bruit est un élément extrêmement important lors de l'activation d'un frein de parking électrique. Analyser le spectre de ce dernier est un test crucial et ma solution vient permettre d'effectuer une fine analyse.",
					technologies: [
					{
						title: 'Outils et Technologies',
						techs: [
							'Excel',
							'VBA',
							'C#',
							'Visual Studio',
							'SimCenterLabs'
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							"Les nouvelles générations de frein possèdent un frein de parking électrique (dénommé Automated Parking Break ou APB). Contrairement aux freins à main à câble, ces derniers sont pilotés électriquement."
					},
					{
						id: 2,
						details:
							"Ces freins lors de leur actionnement produisent un bruit. L'étude du bruit et sa perception par l'oreille humaine est un point auquel Hitachi Astemo est particulièrement attaché. Un 'beau' bruit donne une impression de qualité tandis qu'un bruit qui tend vers l'aïgu donne une impression de plus piètre qualité."
					},
					{
						id: 3,
						details:
							"Au sein du département de tests, des essais sonores sont effectués. Mon rôle a été de proposer un logiciel permettant de traiter les données de tests, de comparer ces valeurs aux critères du client et, finalement, de produire un PV attestant la conformité (ou non) des résultats."		
					},
					{
						id: 4,
						details:
							"Ce projet a été enrichissant car j'ai non seulement eu la casquette de développeur logiciel mais également celle de pilote de projet. En effet, j'ai coordonné la mise à niveau du moyen de mesure, la formation des techniciens amenés à utiliser l'outil et enfin la corrélation entre les mesures du laboratoire de test situé à Drancy et les nôtres. Dorénavant, mes collègues m'appellent l'expert du son bien que je n'ai aucune prétention dans ce domaine."
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
