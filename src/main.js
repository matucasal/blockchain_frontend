import Vue from 'vue'
import DashboardCrypto from './components/DashboardCrypto'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(DashboardCrypto),
}).$mount('#app')
