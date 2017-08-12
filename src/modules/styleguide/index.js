import angular from 'angular'
import { sgSidebar } from './components'
import sgCollectionOfComponents from './modules/collection-of-components'
import sgTypography from './modules/typography'
import sgColors from './modules/colors'
import styleguide from './styleguide'
import { styleguideState, styleguideComponentsState, styleguideTypographyState, styleguideColorsState } from './styleguide.states'

const states = [ styleguideState, styleguideComponentsState, styleguideTypographyState, styleguideColorsState ]

export default angular.module('styleguide', [])
  .component('sgSidebar', sgSidebar)
  .component('styleguide', styleguide)
  .component('sgComponents', sgCollectionOfComponents)
  .component('sgTypography', sgTypography)
  .component('sgColors', sgColors)
  .config(['$stateRegistryProvider', $stateRegistry => states.forEach(state => $stateRegistry.register(state))])
