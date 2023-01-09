<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Passionné d\'informatique, j\'ai décidé d\'entreprendre mes études dans ce domaine.\n' +
              'Voulant me perfectionner dans ce domaine, l\'école d\'ingénieur m\'a semblé être un choix évident.\n' +
              'L\'apprentissage me permet de concrétiser le savoir acquis en cours et l\'employer au profit du savoir-faire.',
				},
				{
					id: 2,
					bio:
						"Au cours de mon expérience professionnelle, j'ai découvert un véritable attrait pour le développement logiciel. \n" +
              "J'ai donc pris l'initiative de me former et proposer mes premiers logiciels dans le cadre de mon travail. \n" +
              "Je suis en permanente quête de savoir et j'adore développer mes compétences techniques et sociales.",
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profilePic.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
