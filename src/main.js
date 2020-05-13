import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import { router } from './router/router'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store: store,
    router: router
}).$mount('#app')