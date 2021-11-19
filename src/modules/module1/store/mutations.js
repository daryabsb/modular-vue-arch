import { SET_DATA } from './mutation-types';

export const mutations = {
  [SET_DATA](state,data){
    state.module1Data = data
  }
}
