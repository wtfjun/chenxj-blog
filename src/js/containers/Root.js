import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import NProgress from 'nprogress'
import { createHashHistory } from 'history'
import App from '../containers/App.js'
import Page from '../containers/Page.js'

import 'normalize.css'
import '../../css/article.scss'
import '../../css/sidebar.scss'
import '../../css/nprogress.scss'
import '../../css/font.scss'
import '../../css/write.scss'
import '../../css/login.scss'

const appHistory = useRouterHistory(createHashHistory)()

const Login = (location, cb) => {
  // document.title = CONFIG.titleLoad;
  NProgress.start()
  require.ensure([], require => {
    cb(null, require('../components/Login.js').default)
  }, 'login')
}
const Signup = (location, cb) => {
  // document.title = CONFIG.titleLoad;
  NProgress.start()
  require.ensure([], require => {
    cb(null, require('../components/Signup.js').default)
  }, 'login')
}

const Write = (location, cb) => {
  // document.title = CONFIG.titleLoad;
  NProgress.start()
  require.ensure([], require => {
    cb(null, require('../components/Write.js').default)
  }, 'write')
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Page} />
    <Route path="login" getComponent={Login} />
    {/*<Route path="signup" getComponent={Signup} />*/}
    <Route path="write/:id" getComponent={Write} />
  </Route>
)

export default class Root extends React.Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
}