import css from './sidebar.scss'
import template from './sidebar.pug'

class Sidebar {
  constructor() {
    console.log(this)
  }
  $onInit() {
    console.log(this)
  }
}

export default ({
  bindings: {
    subStates: '='
  },
  template,
  controller: Sidebar
})
