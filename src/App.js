import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './css/styles.css';
import AboutUs from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
