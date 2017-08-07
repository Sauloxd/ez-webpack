const component = {
  template,
  bindings: {
    items: '='
  },
  controller() {
    this.$onInit = () => {
      console.log('navbar loaded! :)')
    }
  }
}

export { component }
