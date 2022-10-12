import React from 'react';
import ReactDOM from 'react-dom/client';
// import Gtask from './components/task6/Gender';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Tates from './components/useState/UseState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
    <br/>
    {/* <Gtask/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
