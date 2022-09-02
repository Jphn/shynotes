import { defineStore } from 'pinia';
import { ref } from 'vue';

const url = 'https://shynotes-api.deno.dev/notes/';

export const useNoteStore = defineStore('note', () => {
	let isNew = true;

	const content = ref('');

	async function getNote(noteName: string) {
		let response = await fetch(url + noteName);

		content.value = '';

		if (response.status == 204) return;

		isNew = false;

		let json = await response.json();

		content.value = json.content;
	}

	async function saveNote(noteName: string) {
		let postOptions = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: noteName,
				content: content.value,
			}),
		};

		let putOptions = {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				content: content.value,
			}),
		};

		let response = await fetch(
			url + (isNew ? '' : noteName),
			isNew ? postOptions : putOptions
		);

		isNew = false;

		console.log(response.status); // FIXME - Debug only.
	}

	async function deleteNote(noteName: string) {
		let response = await fetch(url + noteName, { method: 'DELETE' });

		console.log(response.status); // FIXME - Debug only.
	}

	return { content, getNote, saveNote, deleteNote };
});
