import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.js';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



axios.defaults.baseURL = "https://designback-production.up.railway.app/" || "http://localhost:3001";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils} >
  <Provider store={store}>
 
    <App />

  </Provider>
  </MuiPickersUtilsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
