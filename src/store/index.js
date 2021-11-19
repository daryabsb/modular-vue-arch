import { createStore, createLogger } from 'vuex';

export default createStore({
  plugins: [createLogger()],
})
