import React from 'react';
import ReactDOM from 'react-dom';
import { App, Dashboard } from './';
import './index.css';

import 'normalize.css';

require('@blueprintjs/core/dist/blueprint.css');
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App}/>
      <Route path="dashboard" component={Dashboard}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
