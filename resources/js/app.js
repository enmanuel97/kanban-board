require('./bootstrap');
window.Vue = require('vue');
import 'bootstrap/dist/js/bootstrap.min.js'

import router from './router';
import store from './store';

const app = new Vue({
    el: '#app',
    router: router,
    store: store
});
