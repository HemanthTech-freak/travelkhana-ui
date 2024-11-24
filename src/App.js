import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './css/styles.css';
import AboutUs from './pages/About';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/career" exact component={Career} />
      </Switch>
    </Router>
  );
}

export default App;
