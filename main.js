import App from './App'
import store from './store'
import {myRequest} from "./util/api.js"

Vue.prototype.$myRequest = myRequest;

import Vue from 'vue';
Vue.config.productionTip = false;
App.mpType = 'app';

// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui';
Vue.use(TuniaoUI);

// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js');
Vue.mixin(vuexStore);
//引入vuex
Vue.prototype.$store = store;

const app = new Vue({
	store,
	...App
})
app.$mount()