export default {

  props: ['modal'],

  data() {
    return {}
  },

  methods: {

    hideModal() {
      if(this.modal.close)
        this.$emit('hideModal');
    }

  }

}
