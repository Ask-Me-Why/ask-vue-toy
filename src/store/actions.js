/*
 * @Author: askMeWhy
 * @Date:   2017-12-29 14:44:52
 * @Last Modified by:   bigWave
 * @Last Modified time: 2017-12-29 15:15:24
 */
import { localStorage } from '@/utils';
import {
	ALL_NOTES,
	ALL_NOTES_SUCCESS,
	ADD_NOTE,
	ADD_NOTE_SUCCESS,
	UPDATE_NOTE,
	UPDATE_NOTE_SUCCESS,
	REMOVE_NOTE,
	REMOVE_NOTE_SUCCESS,
	ERROR_MSG
} from './mutations-types';

export const notesActions = {
	allNotes({ commit }) {
		commit(ALL_NOTES);
		let timer = setTimeout(() => {
			let data = localStorage.getItem('notes');
			commit(ALL_NOTES_SUCCESS, data || []);
			clearTimeout(timer);
		}, 300);
	},
	addNote({ commit }, payload) {
		commit(ADD_NOTE);
		let timer = setTimeout(() => {
			let data = localStorage.getItem('notes');
			if (!data) {
				localStorage.setItem('notes', [payload]);
			} else {
				data.push(payload);
				localStorage.setItem('notes', data);
			}
			commit(ADD_NOTE_SUCCESS, payload);
			clearTimeout(timer);
		}, 300);
	},
	updateNote({ commit }, payload) {
		commit(UPDATE_NOTE);
		let timer = setTimeout(() => {
			let data = localStorage.getItem('notes');
			let index = data.findIndex(d => d.id == payload.id);
			if (index != -1) {
				data[index] = payload;
			}
			localStorage.setItem('notes', data);
			commit(UPDATE_NOTE_SUCCESS, payload);
			clearTimeout(timer);
		}, 300);
	},
	removeNote({ commit }, payload) {

		commit(REMOVE_NOTE);
		let timer = setTimeout(() => {
			let data = localStorage.getItem('notes');
			let index = data.findIndex(d => d.id == payload.id);
			if (index != -1) {
				data.splice(index, 1);
			}
			localStorage.setItem('notes', data);
			commit(REMOVE_NOTE_SUCCESS, payload);
			clearTimeout(timer);
		}, 300);
	}
}
