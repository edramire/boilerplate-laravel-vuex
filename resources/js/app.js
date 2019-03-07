require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import routes from './routes/routes';

Vue.use(VueAxios, axios)
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.axios.defaults.baseURL = 'boilerplate-vuex.test/api/';

Vue.use(VueAuth, {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.3.x.js'),
    loginData: {
        url: '/login'
    },
    logoutData: {
        url: '/logout'
    },
    fetchData: {
        url: '/api/user'
    },
    refreshData: {
        enabled: false
    },
    rolesVar: 'role',
});

let component = require('./views/App.vue');
Vue.router = new VueRouter({
    routes
});
component.router = Vue.router;
new Vue(component).$mount('#app');
