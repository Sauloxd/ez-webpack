import angular from 'angular'
import css from './navbar.scss'
import * as navbar from './navbar'

export default angular
  .module('elastiqx.navbar', [])
  .component('navbar', navbar.component)
  .name
