import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

// layout
// import Layout from './layout'

// pages
import Homepage from './pages/homepage'
import Login from './pages/login'

export default function Routes() {
  const [isLogin, setLogin] = useState(false)

  const PrivateRoute = ({ exact, component, path }) => {
    if (!isLogin) {
      return <Redirect to="/login" />
    }
    return <Route path={path} exact={exact} component={component} />
  }

  useEffect(() => {
    if (Cookies.get('userToken')) {
      setLogin(true)
    }
  }, [])

  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <PrivateRoute path="/" exact component={Homepage} isLogin={isLogin} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}
