import App from './App'
import All from './pages/All'
import View from './pages/View'
import New from './pages/New'
const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: All },
  childRoutes: [
    { path: 'view', component: View },
    { path: 'view/:id', component: View },
    { path: 'new', component: New }
  ]
}]
export default routes
