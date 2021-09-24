import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'

import Home from './views/pages/Home'
import ProfileCard from './views/pages/ProfileCard'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile-card' component={ProfileCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
