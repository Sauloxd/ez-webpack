import angular from 'angular'
import { navbar } from '../../components'
import * as home from './home'

export default angular.module('elastiqx.home', [navbar ])
  .component('home', home.component)
  .config(home.config)
  .name
