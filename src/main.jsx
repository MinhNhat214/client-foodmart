// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import "../src/styles/global.css"


// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
