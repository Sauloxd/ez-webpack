import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import globalConfig from './app.config'
import globalCSS from './styles/index.scss'
import { home } from './pages'

console.log('Main entry poing \(app.js\) LOADED! dep: ', home)
angular.module('elastiqx', [ uiRouter, home ])
  .config(globalConfig)
