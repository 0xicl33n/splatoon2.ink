// Entry point for the automated screenshots page

import Vue from 'vue';
import './directives.js';
import './filters.js';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Schedules from './components/screenshots/schedules/Schedules.vue';
const routes = [
    { path: '/schedules/:startTime', component: Schedules },
];
const router = new VueRouter({ routes });

// Start the Vue app with our root component
import Screenshots from './components/Screenshots.vue';
new Vue({
    render: h => h(Screenshots),
    router,
}).$mount('#app');

// Start analytics
require('./analytics');
