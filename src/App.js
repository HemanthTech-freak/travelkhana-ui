import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './css/styles.css';
import AboutUs from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/career" exact component={Career} />
        <Route path="/contact-us" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
