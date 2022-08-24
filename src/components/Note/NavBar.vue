<script setup lang="ts">
	import { useNoteStore } from '@/stores/note';
	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();
	const noteStore = useNoteStore();

	const actions = {
		save: async () => await noteStore.saveNote(route.params.note.toString()),
		delete: async () => {
			await noteStore.deleteNote(route.params.note.toString());

			router.push({ name: 'home' });
		},
		share: () => console.log('share'),
		download: () => console.log('download'),
		about: () => console.log('about'),
	};
</script>

<template>
	<header>
		<nav>
			<ul>
				<li><button @click="actions.save()">Save</button></li>
				<li><button @click="actions.delete()">Delete</button></li>
				<li><button @click="actions.share()">Share</button></li>
				<li><button @click="actions.download()">Download</button></li>
				<li><button @click="actions.about()">About</button></li>
			</ul>

			<router-link :to="{ name: 'home' }">shyNotes</router-link>
		</nav>
	</header>
</template>

<style scoped>
	header {
		background-color: var(--middle);

		height: 6vh;
		width: 100%;
	}

	nav {
		margin: 0 auto;

		height: 100%;
		max-width: 98vw;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		height: 100%;

		display: flex;
		gap: 1.6rem;
	}

	li {
		height: 100%;
	}

	button {
		border: none;
		background-color: transparent;

		color: var(--darker);

		font-size: 2.4rem;

		padding: 0 1rem;
		height: 100%;
	}

	a {
		text-decoration: none;
		font-family: 'Archivo', sans-serif;

		font-size: 3.6rem;

		color: var(--darker);
	}

	@media screen and (max-width: 580px) {
		nav {
			justify-content: center;
		}

		ul {
			display: none;
		}
	}
</style>
