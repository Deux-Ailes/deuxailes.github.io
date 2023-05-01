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
				singleProjectTitle: 'RRCX',
				singleProjectDate: '1 Sept 2022 - 1 Sept 2023',
				singleProjectTag: 'Logiciel / Mecanique',
			},
			projectImages: [
				{
					id: 1,
					title: 'Chariot',
					img: require('@/assets/images/projets/RRCX.jpeg'),
				},
			],
			projectInfo: {
				clientHeading: 'A propos du client',
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
				objectivesHeading: 'Objective',
				objectivesDetails:
					"Mettre à jour deux bancs d'essais, informatique et mécanique",
				technologies: [
					{
						title: 'Outils & Technologies',
						techs: [
							'C# WPF .NET 4.8',
							'Syncfusion',
							'Specflow',
							'Excel',
							'Rexroth',
							'HBM',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							"Le projet RRCX consiste en la mise à jour informatique d'un banc de test et de la mise à jour informatique et mécanique de son binôme. Les bancs permettent de tester les fonctions du piston d'un frein et sont équipés de trois chaînes de mesure : Force, Pression et Déplacement."
					},
					{
						id: 2,
						details:
							"RRCX est mon projet ingénieur que j'ai mené pendant un an et qui m'a permis de démontrer mes capacités d'ingénieur débutant. J'ai porté plusieurs casquettes au cours de ce projet que je vais détailler ci-dessous."
					},
					{
						id: 3,
						details:
							"Chef de projet : Il s'agit du rôle que j'ai occupé tout du long du projet. Depuis septembre 2022 je suis officiellement la personne référente lorsqu'il s'agit de la mise à jour des deux bancs. Mon rôle était donc de planifier le déroulement du projet, comprendre les attentes des utilisateurs et clients, gérer les ressources qui m'étaient attribuées, m'adapter aux contraintes et faire en sorte que le projet soit une réussite."
					},
					{
						id: 4,
						details:
							"Ingénieur logiciel : La partie que je vais qualifier de technique s'est déroulée pendant près de 6 mois. Au programme : Création d'un logiciel permettant d'éxécuter des plans d'essais de manière automatique en pilotant deux automates et en acquérant des données issues des chaînes de mesures citées précédemment. Je me suis appuyé sur une méthodologie Agile pour le développement de ma solution afin de proposer aux clients un contenu régulier. "
					},
					{
						id: 5,
						details:
							"Ingénieur qualité : En modifiant les bancs, je modifie les chaînes de mesures, l'acquisition de données etc... Il est donc naturel de valider chaque banc en procédant à une série d'étude type Cg/Cgk, R&r ou bien en menant une comparaison inter-banc. J'ai donc organisé le déroulement des études, analysé les données statistiques et mis en place des plans d'actions selon les écarts rencontrés. C'était une casquette extrêmement enrichissante puisque tout le coeur de métier du service (la qualité) repose sur ces principes d'études."
					},
					{
						id: 6,
						details:
							"Formateur & pérénisation : Mettre à jour des bancs, c'est bien. Péréniser ces retrofits dans le futur, c'est mieux. Pour cela, j'ai prodigué des formations individuelles à chacun des techniciens sur le nouveau logiciel que j'ai conçu. Des modes opératoires ont également été rédigés pour que les futurs techniciens ne soient pas perdus pour effectuer une quelconque action. Du point de vue logiciel, des modes opératoires ont également été rédigés. J'ai de plus conçu une documentation XML complète du logiciel pour que ce dernier puisse être repris facilement."
					},
				],
				
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'NVH',
						img: require('@/assets/images/projets/NVH.jpeg'),
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
