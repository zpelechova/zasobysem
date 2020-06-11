import Vue from 'vue';
import VueRouter from 'vue-router'
import Homepage from './components/homepage';
import Rozvoz from './components/rozvoz';
import Baliky from './components/baliky';
import O_projektu from './components/o_projektu';
import Pro_rozvozce from './components/pro_rozvozce';
import Chleba from './components/chleba';
import App from './components/App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/homepage', component: Homepage },
    { path: '/rozvoz', component: Rozvoz },
    { path: '/baliky', component: Baliky },
    { path: '/o_projektu', component: O_projektu },
    { path: '/pro_rozvozce', component: Pro_rozvozce },
    { path: '/chleba', component: Chleba },

  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});