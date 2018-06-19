import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IpLabel from './ip-label';

class App extends React.Component {
  render() {
    return (
      <div>
        <IpLabel />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));