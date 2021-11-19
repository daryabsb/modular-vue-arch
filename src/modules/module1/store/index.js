import { actions } from './actions';
import { mutations } from './mutations';

const state = () => ({
  module1Data:{
    stateData: 'beforeIteration'
  }
});

const getters = {};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
