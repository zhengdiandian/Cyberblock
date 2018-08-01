// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from './components/header'
import Footer from './components/footer'
import Mian from './components/mian'
import i18n from './lang/lang'
Vue.config.productionTip = false
Vue.component('cn-header', Header)
Vue.component('cn-footer', Footer)
Vue.component('cn-mian', Mian)
/* eslint-disable no-new */

// Ready translated locale messages
// const messages = {
//   en: {
//     message: {
//       hello: 'hello world'
//     }
//   },
//   ja: {
//     message: {
//       hello: 'こんにちは、去你妈的世界'
//     }
//   }
// }
// Create VueI18n instance with options


// new Vue({ i18n }).$mount('#app')

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  i18n,
})
