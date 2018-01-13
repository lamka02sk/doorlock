import Vue from 'vue'
import Index from './components/Index'
import router from './router'
import './styles/Main.sass'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index },

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
