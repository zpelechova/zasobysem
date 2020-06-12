import Vue from 'vue';
import VueRouter from 'vue-router'
import Homepage from './components/homepage';
import O_projektu from './components/o_projektu';
import Pro_rozvozce from './components/pro_rozvozce';
import App from './components/App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/o_projektu', component: O_projektu },
    { path: '/pro_rozvozce', component: Pro_rozvozce },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});