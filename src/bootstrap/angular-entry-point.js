import angular from 'angular'
import { visualizer } from '@uirouter/visualizer'

import APP_MODULE from '../modules/app'
import GLOBAL_MODULE from '../modules/global'
import STYLEGUIDE_MODULE from '../modules/styleguide'

export default angular.module('elastiqx', [
  'ui.router', //added via CDN, @all improve this!
  APP_MODULE.name,
  GLOBAL_MODULE.name,
  STYLEGUIDE_MODULE.name
])
  .config(['$uiRouterProvider', $uiRouter => {
    // Show the UI-Router Visualizer
    visualizer($uiRouter)
  }])

