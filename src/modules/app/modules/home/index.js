import angular from 'angular'
import * as home from './home'

export default angular.module('elastiqx.home', [])
  .run(() => {
    console.log('home running@')
  })
  .component('home', home.component)
  .name
