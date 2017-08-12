const appState = {
  name: 'app',
  redirectTo: 'home',
  component: 'app'
}

const homeState = {
  parent: 'app',
  name: 'home',
  url: '/home',
  component: 'home'
}
export default [ appState, homeState ]

