import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
  theme: {
    primary: '#033863',
    secondary: '#0099cc',
  },
});
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
