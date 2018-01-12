import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

  mounted() {
      this.splash();
  },

  methods: {

    splash() {

      const splashScreen = document.querySelector('.splash-screen');
      const splashName = splashScreen.querySelector('.name');
      const splashLoader = splashScreen.querySelector('.loader');

      splashName.classList.add('animate');
      splashLoader.classList.add('animate');
      splashScreen.classList.add('animate');

    }

  }
});
