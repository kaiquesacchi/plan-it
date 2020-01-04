import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './pages/Projects';
import Project from './pages/Project';
import NewProject from './pages/NewProject';
import General from './pages/General';
import Settings from './pages/Settings';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/new" component={NewProject} />
      <Route exact path="/projects/info/:id" component={Project} />
      <Route exact path="/general" component={General} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
