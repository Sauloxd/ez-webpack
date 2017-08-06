// optionally import bootstrap grid here
import angular from 'angular'
import { navbar } from './components'
import { home } from './pages'

console.log('Main entry poing \(app.js\) LOADED!')
console.log(navbar)
console.log(home)

angular.module('elastiqx', [ home ])
