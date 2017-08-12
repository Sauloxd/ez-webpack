import angular from 'angular'
import modules from './modules'
import components from './components'
import appComponent from './app.component'
import appStates from './app.states'
import appConfig from './app.config'
import { ngDecorate } from '../../utils'

import globalCSS from '../../styles/index.scss'

export default ngDecorate(angular.module('elastiqx.app', [].concat(modules)))
  .run(() => {
    console.log('App Running')
  })
  .components([ appComponent ].concat(components))
  .config(['$stateRegistryProvider', $stateRegistry => appStates.forEach(state => $stateRegistry.register(state))])
  .config(appConfig)

