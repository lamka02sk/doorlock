import Storage from './Storage'
import Modals from './../components/Modal.vue'

export default {

  components: { Modals },

  data() {
    return {
      modal: {},
    }
  },

  created() {

    this.modal = Storage.checkSupport();
    Storage.prepare();

  },

  methods: {

    hideModal() {
      this.modal = null;
    }

  },

}
