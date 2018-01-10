import App from './App'
import All from './pages/All'
import View from './pages/View'

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: All },
  childRoutes: [
    { path: 'view', component: View }
  ]
}]
export default routes
