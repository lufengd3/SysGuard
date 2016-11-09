import React, { Component } from 'react';
import  ReactDOM from 'react-dom';
import IpLabel from './ip-label';

class App extends Component {
  render() {
    return (
      <div>
        <IpLabel />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));