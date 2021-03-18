import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mockData.js'

Vue.config.productionTip = false

let data = {
    contacts: mock,
    favorites: [],
    texts: {},
}

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')
