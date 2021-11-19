import { createApp } from 'vue';
import { registerModules } from './registerModule'
import store from './store';
import App from './App.vue';
import router from './router';
import module1 from './modules/module1';

registerModules(router,store,{
  module1
});

console.log(router.getRoutes());

const app = createApp(App).use(router).use(store);

app.mount('#app');
