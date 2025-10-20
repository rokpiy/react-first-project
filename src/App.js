import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
