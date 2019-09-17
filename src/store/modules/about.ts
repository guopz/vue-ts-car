import { Commit, ActionContext } from 'vuex';
import * as Api from '../../api/home';

interface State  {
	freeList: any[],
  jokeList: any[],
  newsList: any[]
}
const state: State = {
	// state...
	freeList: [],
  jokeList: [],
  newsList: []
};
const getters = {
	// getters...
};
const mutations = {
	mApiMfree(state: State, data: any) {
		state.freeList = data;
	},
	mApiListJoke(state: State, data: any) {
		state.jokeList = data;
  },
  mApiListNews(state: State, data: any) {
    state.newsList = data;
  }
};
const actions = {
	// actions...
	async aApiMfree(context: ActionContext<State, any>, data: any) {
		const res: any = await Api.apiMfree(data, null);
		context.commit('mApiMfree', res);
		return res;
	},
	async aApiListJoke(context: { commit: Commit, state: State }, data: any) {
		const res: any = await Api.apiListJoke(data, null);
		context.commit('mApiListJoke', res);
		return res;
  },
  async aApiListNews(context: { commit: Commit }, data: any) {
		const res: any = await Api.apiListNews(data, null);
		context.commit('mApiListNews', res);
		return res;
	}
};
export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
