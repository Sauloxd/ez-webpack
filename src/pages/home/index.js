import angular from 'angular'
import template from './home.pug'
import css from './home.scss'
import { navbar } from '../../components'

export default angular.module('elastiqx.home', [ navbar ])
  .controller('ctrl', () => {
    console.log('home! :)')
  }).name


