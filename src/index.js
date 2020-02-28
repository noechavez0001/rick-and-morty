import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Results from './pages/results'
import Profile from './pages/profile'
import Home from './pages/home'
import Episode from './pages/episode'
import AdvSearch from './pages/search'
import NotFound from './pages/notfound'

import store from './redux/store'

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/character/:id' component={Profile} />
        <Route exact path='/episode/:episode' component={Episode} />
        <Route exact path='/search' component={AdvSearch} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDom.render(Root, document.getElementById('root'))
