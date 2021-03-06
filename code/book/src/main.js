import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import axios from 'axios'
Vue.prototype.axios = axios;

import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
