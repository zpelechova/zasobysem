import Vue from 'vue';
import VueRouter from 'vue-router'
import Homepage from './components/homepage';
import O_projektu from './components/o_projektu';
import Pro_rozvozce from './components/pro_rozvozce';
import Bake_bread from './components/bake_bread';
import Delivery from './components/Delivery';
import Parcels from './components/Parcels';
import App from './components/App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/o_projektu', component: O_projektu },
    { path: '/pro_rozvozce', component: Pro_rozvozce },
    { path: '/bake_bread', component: Bake_bread },
    { path: '/Delivery', component: Delivery },
    { path: '/Parcels', component: Parcels },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});