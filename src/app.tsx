import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './browser/index';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric';
import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';

initializeIcons();

ReactDOM.render(
  // <Fabric>
    <App />,
  // </Fabric>,
  document.getElementById('root')
);