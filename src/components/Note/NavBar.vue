<script setup lang="ts">
	import { useNoteStore } from '@/stores/note';
	import { ref } from 'vue';
	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();
	const noteStore = useNoteStore();

	const menuIsOpen = ref(false);

	const actions = {
		save: async () => await noteStore.saveNote(route.params.note.toString()),
		delete: async () => {
			await noteStore.deleteNote(route.params.note.toString());

			router.push({ name: 'home' });
		},
		share: () => {
			navigator.clipboard.writeText(window.location.href);
		},
		download: () => console.log('download'),
		about: () => console.log('about'),
	};
</script>

<template>
	<header>
		<nav>
			<ul :class="{ open: menuIsOpen }">
				<li><button @click="actions.save()">Save</button></li>
				<li><button @click="actions.delete()">Delete</button></li>
				<li><button @click="actions.share()">Share</button></li>
				<li><button @click="actions.download()">Download</button></li>
				<li><button @click="actions.about()">About</button></li>
			</ul>

			<router-link :to="{ name: 'home' }">shyNotes</router-link>

			<i
				@click="() => (menuIsOpen = !menuIsOpen)"
				:class="{ open: menuIsOpen }"
			></i>
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

	i {
		display: none;
	}

	@media screen and (max-width: 680px) {
		i {
			display: block;

			cursor: pointer;

			background-image: url('@/assets/images/menu-lined.svg');
			background-repeat: no-repeat;

			width: 5rem;
			height: 5rem;
		}

		i.open {
			z-index: 1000;

			background-image: url('@/assets/images/x-mark-lined.svg');
			background-repeat: no-repeat;
		}

		nav {
			justify-content: space-between;
		}

		ul {
			z-index: 1000;
			visibility: hidden;
			position: fixed;

			flex-direction: column;
			justify-content: center;
			gap: 4rem;
			width: 65vw;

			background-color: var(--middle);

			top: 0;
			right: -100vw;
			bottom: 0;

			transition: all 500ms ease-in-out;
		}

		ul.open {
			visibility: visible;

			right: 0;

			transition: all 700ms ease-in-out;
		}

		button,
		li {
			height: fit-content;

			width: 100%;
		}

		button {
			font-size: 3rem;
		}
	}
</style>
