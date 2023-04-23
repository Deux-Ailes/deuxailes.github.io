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
				singleProjectTitle: 'Coin API',
				singleProjectDate: '1 Avril 2022',
				singleProjectTag: 'Android',
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
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'ESEO',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Conception application Android',
					}
				],
				objectivesHeading: 'Objectifs',
				objectivesDetails:
					'Créer une application Android permettant de récupérer les dernières informations sur des cryptomonnaies',
				technologies: [
					{
						title: 'Outils & Technologies',
						techs: [
							'Java',
							'Android Studio',
							'API Open-source'
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							"Dans le cadre du module Android prodigué à l'ESEO, nous avons pour mission de réaliser en binôme une application Android."
					},
					{
						id: 2,
						details:
							"Le principe de cette application était d'appliquer les notions vues en cours (Design pattern MVVM, mise en place de Lazy Loading, usage d'une API)"
					},
					{
						id: 3,
						details:
							"Notre approche était de concevoir une application légère pour l'utilisateur, une interface simple et la mise en place de petits détails pratiques pour l'utilisateur comme la possibilité de tirer vers le haut la liste des cryptomonnaies afin de rafraîchir le top 10, la mise en place des raccourcis du swipe left pour retourner sur la page d'origine etc..."
					},
					{
						id: 4,
						details:
							"Déjà familier avec l'univers Android, j'ai particulièrement apprécié cette mise en pratique puisque nous avions le champ libre pour la création de cette application. J'ai pu découvrir les joies des échanges avec API et envisage dans mes futurs projets d'inclure ces outils extrêmement utiles et, pourquoi pas, produire la mienne selon les besoins."
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Projets liés',
				relatedProjects: [
					{
						id: 1,
						title: 'Projet SIGL',
						img: require('@/assets/images/mobile-project-1.jpg'),
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
