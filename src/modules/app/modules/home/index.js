import angular from 'angular'
import * as home from './home'

export default angular.module('elastiqx.home', [])
  .component('home', home.component)
  .name
