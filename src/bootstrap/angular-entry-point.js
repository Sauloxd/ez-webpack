/**
 * This file imports the third party library dependencies, then creates the angular module 'demo'
 * and exports it.
 */
// External dependencies
import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import { StickyStatesPlugin } from '@uirouter/sticky-states'
import { DSRPlugin } from '@uirouter/dsr'
import { visualizer } from '@uirouter/visualizer'
import ocLazyLoad from 'oclazyload'

import APP_MODULE from '../modules/app'
import GLOBAL_MODULE from '../modules/global'
import STYLEGUIDE_MODULE from '../modules/styleguide'

// Create the angular module 'demo'.
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
export default angular.module('elastiqx', [
  uiRouter,
  // ocLazyLoad,
  APP_MODULE.name,
  GLOBAL_MODULE.name,
  STYLEGUIDE_MODULE.name
])
  .config(['$uiRouterProvider', $uiRouter => {
    $uiRouter.plugin(StickyStatesPlugin)
    $uiRouter.plugin(DSRPlugin)
    // Show the UI-Router Visualizer
    visualizer($uiRouter)
  }])

