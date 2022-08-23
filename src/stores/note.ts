import { defineStore } from 'pinia';
import { ref } from 'vue';

const url = 'http://localhost:3030/notes/';

export const useNoteStore = defineStore('note', () => {
	let isNew = true;

	const content = ref('');

	async function getNote(noteName: string | string[]) {
		let response = await fetch(url + noteName);

		content.value = '';

		if (response.status == 404) return;

		isNew = false;

		let json = await response.json();

		content.value = json.content;
	}

	async function saveNote(noteName: string | string[]) {
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

		console.log(response.status);
	}

	return { content, getNote, saveNote };
});
