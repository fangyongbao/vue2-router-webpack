import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueProgressbar from 'vue-progressbar'

import 'common.scss'
import App from '../src/components/index/App'
import IndexRouter from '../src/routers/IndexRouter'

// Vue.use(VueProgressbar)
// Vue.use(VueResource)
// Vue.use(VueRouter)

const app = new Vue({
	render: h => h(App),
	router: IndexRouter
}).$mount('#app')
// 现在，应用已经启动了！
