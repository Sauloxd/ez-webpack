import angular from 'angular'
import modules from './modules'
import components from './components'
import appComponent from './app.component'
import appStates from './app.states'
import { ngDecorate } from '../../utils'

export default ngDecorate(angular.module('elastiqx.app', [].concat(modules)))
  .components([ appComponent ].concat(components))
  .config(['$stateRegistryProvider', $stateRegistry => appStates.forEach(state => $stateRegistry.register(state))])

