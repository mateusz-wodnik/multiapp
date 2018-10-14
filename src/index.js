import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap-reboot.css';
import './styles/global.sass';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import App from './components/App/App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

registerServiceWorker();
