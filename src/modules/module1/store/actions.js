export const actions = {
  async getData({commit}){
    const data = {
      stateData: 'afterIteration'
    };
    commit('SET_DATA',data)
  }
}
