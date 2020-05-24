import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './views/Home'
import Popular from './views/Popular'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/popular" component={Popular}/>
        <Route component={NotFound} />
       </Switch>
    </Router>
    );
}

export default App;
