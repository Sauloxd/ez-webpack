import angular from 'angular'
import runs from './runs'
import directives from './directives'
import services from './services'
import config from './global.config'
import { ngDecorate } from '../../utils'

export default ngDecorate(angular.module('global', []))
  .runs(runs)
  .config(config)
  .services(services)
  .directives(directives)
