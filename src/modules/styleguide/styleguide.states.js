export const styleguideState = {
  name: 'styleguide',
  url: '/styleguide',
  component: 'styleguide',
  deepStateRedirect: {
    default: { state: 'styleguide.components' }
  },
  sticky: true
}

export const styleguideComponentsState = {
  name: 'styleguide.components',
  url: '/components',
  component: 'sgComponents'
}

export const styleguideTypographyState = {
  name: 'styleguide.typography',
  url: '/typography',
  component: 'sgTypography'
}

export const styleguideColorsState = {
  name: 'styleguide.colors',
  url: '/colors',
  component: 'sgColors'
}

