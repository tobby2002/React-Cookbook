import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PersonList from "./apiwithaxios/personlist";
// import PersonList from "./apiwithaxios/userpost";
// import PersonList from "./apiwithaxios/delete";
// import PersonList from "./apiinstanceawait/deleteawait";
// import PersonList from "./apiinstanceawait/userpostawait";
import App from "./axiosshards/App";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/*<PersonList/>*/}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
