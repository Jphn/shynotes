<script setup lang="ts">
	import { useNoteStore } from '@/stores/note';
	import { onMounted } from 'vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();

	const noteStore = useNoteStore();

	onMounted(async () => {
		await noteStore.getNote(route.params.note.toString());
	});
</script>

<template>
	<textarea v-model="noteStore.content"></textarea>
</template>

<style scoped>
	textarea {
		margin: 0 auto;

		width: 100%;
		height: 94vh;

		padding: 0;
		margin: 0;

		border: none;
		outline: none;
		background-color: transparent;
		resize: none;

		font-weight: 300;
		font-size: 2rem;
	}
</style>
