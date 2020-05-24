import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './app.module.css'
// compnents import
import Header from './components/Header'
import Home from './views/Home'
import Popular from './views/Popular'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.content__wrapper}>
             <Header />
      {/* 
      tell react router to switch between 
      components and render the appropriate route
      */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/popular" component={Popular}/>
        <Route component={NotFound} />
       </Switch>
        </div>
      
      </div>
     
    </Router>
    );
}

export default App;
