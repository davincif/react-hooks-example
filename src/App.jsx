// standard node imports

// third party imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// internal imports
import home from './components/home/home';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
