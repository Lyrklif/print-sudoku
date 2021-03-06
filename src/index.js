import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


import mainStore from './store/mainStore';
import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={mainStore}>
    <App />
  </Provider>,
  document.getElementById('root'));

  
serviceWorker.register();

