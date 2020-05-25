import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styles from './app.module.css'
// components import
import Header from './components/Header'
import Home from './views/Home'
import AllQuotes from './views/AllQuotes'
import NotFound from './views/NotFound'
import Credits from './components/Credits';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.content__wrapper}>
          <Header/>
          {/*
        tell react router to switch between
        components and render the appropriate route
        */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/all-quotes" component={AllQuotes}/>
            <Route component={NotFound}/>
          </Switch>
          <Credits/>
        </div>

      </div>

    </Router>
  );
}

export default App;
