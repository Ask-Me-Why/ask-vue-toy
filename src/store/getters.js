/*
* @Author: askMeWhy
* @Date:   2017-12-29 14:44:52
* @Last Modified by:   bigWave
* @Last Modified time: 2017-12-29 14:51:57
*/
export const notesGetters = {
	allNotes(state,getters){
		return state.notes;
	},
	notesById:(state,getters)=>id=>{
		if(getters.notes.length > 0){
			return getters.notes.filter(n=> n.id === id)[0];
		}else{
			return {};
		}
	}
}