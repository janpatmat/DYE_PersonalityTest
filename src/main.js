import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import QuestionPage from './components/Global/Pages/QuestionPage.vue'
import ResultPage from './components/Global/Pages/ResultPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: QuestionPage },
  { path: '/result', component: ResultPage },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
