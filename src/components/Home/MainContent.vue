<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const rawNoteName = ref('');

	const notePath = computed(() =>
		rawNoteName.value.toLowerCase().replace(/\s+/g, '-')
	);

	function goToNotePage() {
		return router.push(`/${notePath.value}`);
	}
</script>

<template>
	<div class="w-content">
		<h1>shyNotes</h1>

		<div class="w-text">
			<p>Create simple private notes.</p>
			<p>Share them to <strong>anyone</strong>, <strong>anywhere</strong>.</p>
			<p>This is shyNotes.</p>
		</div>

		<form class="w-input" @submit.prevent="goToNotePage()">
			<input
				type="text"
				name="noteName"
				id="noteNameInput"
				placeholder="Name your note..."
				v-model.trim="rawNoteName"
				required
			/>
			<button type="submit">Go!</button>
		</form>
	</div>
</template>

<style scoped>
	.w-content {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		justify-content: center;
		align-items: center;
	}

	.w-text {
		width: 100%;

		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.w-text p {
		width: 100%;
	}

	.w-input {
		width: 100%;
	}

	input {
		width: 80%;
	}

	input,
	button {
		padding: 0.8rem;
	}

	button {
		width: 20%;
	}

	@media screen and (max-width: 580px) {
		.w-input {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;
		}

		input,
		button {
			padding: 1rem;
		}
	}
</style>
