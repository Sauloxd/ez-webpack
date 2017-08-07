import template from './navbar.pug'
import css from './navbar.scss'

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
