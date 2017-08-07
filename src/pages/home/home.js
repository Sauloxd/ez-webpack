import css from './home.scss'
import template from './home.pug'

const config = ['$stateProvider', $stateProvider =>
  $stateProvider.state({
    name: 'home',
    url: '/home',
    component: 'home'
  })]

const component = {
  template,
  controller() {
    console.log('Home component loaded!')
  }
}

console.log('config is ',config)

export { config , component }
