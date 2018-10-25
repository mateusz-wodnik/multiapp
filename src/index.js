import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.module.css';
import './styles/bootstrap-reboot.css';
import './styles/global.sass';
import { BrowserRouter, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import App from './components/App/App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);

registerServiceWorker();
