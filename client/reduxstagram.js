import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl'

import App from './components/App';
import Single from './components/single';
import PhotoGrid from './components/photoGrid';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//provider exposes our store to our application and other components
import {Provider} from 'react-redux';

// We use the curly around history because its a named export and store is the default export
import Store, {history} from './store';

const router = (
  <Provider store={Store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path="/view/:postId" component={Single}/>
      </Route>
    </Router>
  </Provider>
)

render(router,document.getElementById('root'))