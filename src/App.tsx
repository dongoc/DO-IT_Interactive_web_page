import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'

import Home from './views/pages/Home'
import ProfileCard from './views/pages/ProfileCard'
import BusinessWeb from './views/pages/BusinessWeb'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile-card' component={ProfileCard} />
        <Route path='/business-web' component={BusinessWeb} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
