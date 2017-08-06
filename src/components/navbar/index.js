import angular from 'angular'
import template from './navbar.pug'
import css from './navbar.scss'

const navbar = () => ({
  scope: {},
  bindToController: {
    count: '='
  },
  controller: function () {
    console.log('navbar! :)')
  },
  // controllerAs: 'counter',
  templateUrl: require('./navbar.pug')
})

export default angular
  .module('elastiqx.navbar', [])
  .component('navbar', navbar)
  .name
