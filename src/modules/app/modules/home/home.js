import css from './home.scss'
import template from './home.pug'

const component = {
  template,
  controller() {
    console.log('Home component loaded!')
  }
}

export { component }
