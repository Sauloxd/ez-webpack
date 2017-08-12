import template from './navbar.pug'
import css from './navbar.scss'

export default ({
  name: 'navbar',
  fn: {
    template,
    controller() {
      console.log('navbar')
    }
  }
})

