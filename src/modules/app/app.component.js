import css from './app.scss'
import template from './app.pug'

const app = {
  template,
  controller() {
    console.log('App component loaded!')
  }
}

export default ({
  name: 'app',
  fn: app
})

