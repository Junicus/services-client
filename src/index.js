import React from 'react';
import ReactDOM from 'react-dom';
import Setup from './Setup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Setup />, document.getElementById('root'));
registerServiceWorker();
