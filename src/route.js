import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import ResultPage from './components/ResultPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/result', name: 'result', component: ResultPage }
];

const router = new VueRouter({
  routes
});

export default router;