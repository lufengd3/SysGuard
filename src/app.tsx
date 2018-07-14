import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './browser/index';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';

initializeIcons();

ReactDOM.render(<App />, document.getElementById('root'));