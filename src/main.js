import { createApp } from 'vue';
import {registerModules} from './registerModule'

import App from './App.vue';
import router from './router';
import module1 from './modules/module1';

registerModules(router,{
  module1
});

const app = createApp(App).use(router);

app.mount('#app');
