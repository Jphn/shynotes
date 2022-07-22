<script setup lang="ts">
	import MainContent from '../components/Home/MainContent.vue';
	import FooterContent from '../components/Home/FooterContent.vue';
</script>

<template>
	<main>
		<MainContent />
	</main>

	<footer>
		<FooterContent />
	</footer>
</template>

<style scoped>
	main {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
	}

	footer {
		min-height: 20vh;

		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		background-color: var(--darker);
		color: var(--whiter);
	}
</style>
