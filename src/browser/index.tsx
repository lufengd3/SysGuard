import * as React from 'react';
import {HashRouter} from 'react-router-dom';
import RouterContent from './components/router';
import Sidebar from './components/sidebar';
import * as style from './style.less';

class App extends React.Component {
  render() {
    console.log(style);
    return (
      <HashRouter>
        <div className={style.rootContainer}>
          <Sidebar />
          <RouterContent />
        </div>
      </HashRouter>
    );
  }
}

export default App;