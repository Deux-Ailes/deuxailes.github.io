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
				singleProjectTitle: 'SIGL',
				singleProjectDate: '1 Sept 2022',
				singleProjectTag: 'Logiciel / Mecanique',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/projets/Alternapp.png'),
				},
			],
			projectInfo: {
				clientHeading: 'À propos',
				companyInfos: [
					{
						id: 1,
						title: 'Nom',
						details: 'ESEO',
					},
					{
						id: 2,
						title: 'Matière',
						details: 'ISI',
					},
				],
				objectivesHeading: 'Objectifs',
				objectivesDetails:
					"Dans une équipe de 8 élèves développeurs fonctionnant en méthodologie Agile, le but est de proposer une solution web pour les apprentis, maîtres d'apprentissage et tuteurs pédagogiques de l'ESEO.",	
				technologies: [
					{
						title: 'Outils & Technologies',
						techs: [
							'Java',
							'Spring',
							'Vue.js',
							'ElementPlus',
							'Selenide',
							'CI/CD',
							'Gitlab'
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							"L'objectif d'Alternapp est de proposer une plateforme web pour les apprentis et toutes les personnes impliquées dans le suivi, la notation ou l'intégration de ces derniers. 3 sprints d'environ 2 semaines étaient dédiés à ce projet, soit environ 100h par personne."
					},
					{
						id: 2,
						details:
							"Durant ce projet, j'ai porté la casquette de responsable qualité. J'étais en charge notamment de tout l'aspect test front-end et back-end. J'étais également en charge de la conformité entre le cahier de tests et les tests réalisés. J'ai également activement contribué à la rédaction des tests."
					},{
						id: 3,
						details:
							"J'ai également contribué au code back-end avec la gestion des end-points. Il s'agissait pour moi d'une totale découverte du framework Spring et du design pattern MVC. Etant déjà familier avec Java, j'ai vite intégré les concepts du framework ce qui m'a permis de travailler efficacement rapidement."
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/c/StomanStudio',
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
