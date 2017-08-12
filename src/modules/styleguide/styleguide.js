import css from './styleguide.scss'
import template from './styleguide.pug'

export default ({
  template,
  controller() {
    this.subStates = [{
      name: 'Colors',
      state: 'styleguide.colors'
    }, {
      name: 'Typography',
      state: 'styleguide.typography'
    }, {
      name: 'Components',
      state: 'styleguide.components'
    }]
  }
})
