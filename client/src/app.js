'use strict'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import { createHashHistory } from 'history'

import Header from './components/header'
import login from './components/login'
import dashboard from './components/dashboard'
import quote from './components/quote'
import admin from './components/admin'
import store from './store'

class app extends React.Component{
	render() {
		return (
      <div><Header/>
        <div>
          {this.props.children}
        </div>
      </div>
      )
	}
}

render(
    <Provider store={store}>
      <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}>
        <Route path="/" component={app}>
          <IndexRoute component={quote} />
          <Route path="login" component={login}/>
          <Route path="dashboard" component={dashboard}/>
          <Route path="quote" component={quote}/>
          <Route path="admin" component={admin}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('app')
)