import Base from '../Base.vue';
import Home from '../views/Home.vue';
import SubComp from '../views/SubComp.vue'

const moduleRoute = {
  path: '/module-1/',
  component: Base,
  children: [
    {
      path: '',
      component: Home,
    },
    {
      path: 'component-1',
      component: SubComp,
    }
  ],
};

export default moduleRoute;

