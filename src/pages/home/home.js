import css from './home.scss'
import template from './home.pug'

const config = $stateProvider =>
  $stateProvider.state({
    name: 'home',
    url: '/home',
    component: 'home'
  })

const component = {
  template,
  controller() {
    console.log('Home component loaded!')
  }
}

export { config, component }
