import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // Encargado de conectar React con Redux
import createHistory  from 'history/createBrowserHistory'; //control de rutas
import { routerMiddleware } from  'react-router-redux'; // Middleware
import thunk from 'redux-thunk'; // otra libreria para evitar que truene el request al API
import reducers from './redux/reducers';

const history = createHistory();
const middleware = [ routerMiddleware(history), thunk ] //Se le esta pasando dos middleware

//Crear Store
const store =createStore (
  reducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={ store }>
    <App history={ history }/>
  </Provider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
