import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConnectWindow from "./components/connect"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<ConnectWindow />, document.getElementById("container"));
