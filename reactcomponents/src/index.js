import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AnyVariable from './firstComponent';

ReactDOM.render(<AnyVariable />, document.getElementById('root'));
registerServiceWorker();
