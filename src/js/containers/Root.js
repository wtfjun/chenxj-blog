import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import App from '../containers/App.js'
import Page from '../containers/Page.js'

import 'normalize.css'
import '../../css/article.scss'
import '../../css/sidebar.scss'
import '../../css/nprogress.scss'

const appHistory = useRouterHistory(createHashHistory)()

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Page} />
  </Route>
)

export default class Root extends React.Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
}