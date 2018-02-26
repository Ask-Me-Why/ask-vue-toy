/*
* @Author: askMeWhy
* @Date:   2017-12-29 14:44:52
* @Last Modified by:   bigWave
* @Last Modified time: 2017-12-29 15:14:33
*/
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

export const notesMutations = {
	[ALL_NOTES](state) {
		state.showLoader = true;
		state.showIndex++;
	},
	[ALL_NOTES_SUCCESS](state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.notes = payload;
	},
	[ADD_NOTE](state) {
		state.showLoader = true;
		state.showIndex++;
	},
	[ADD_NOTE_SUCCESS](state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.notes.push(payload);
	},
	[UPDATE_NOTE](state) {
		state.showLoader = true;
		state.showIndex++;
	},
	[UPDATE_NOTE_SUCCESS](state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		let index = state.notes.findIndex(n => n.id == payload.id);
		if (index != -1) {
			state.notes[index] = payload;
		}
	},
	[REMOVE_NOTE](state) {
		state.showLoader = true;
		state.showIndex++;
	},
	[REMOVE_NOTE_SUCCESS](state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		let index = state.notes.findIndex(n => n.id == payload.id);
		if (index != -1) {
			state.notes.splice(index, 1);
		}
	}
}