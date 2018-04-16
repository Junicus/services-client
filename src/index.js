import React from 'react';
import ReactDOM from 'react-dom';
import Setup from './Setup';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Setup />, document.getElementById('root'));
registerServiceWorker();
