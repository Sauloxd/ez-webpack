export default function ngDecorate(ng) {
  return Object.assign(ng, {
    runs: runners => runners.reduce((angular, runner) => angular.run(runner), ng),
    components: components => components.reduce((angular, { name, fn }) => angular.component(name, fn), ng),
    directives: directives => directives.reduce((angular, { name, fn }) => angular.directive(name, fn), ng),
    services: services => services.reduce((angular, { name, fn }) => angular.service(name, fn), ng)
  })
}
