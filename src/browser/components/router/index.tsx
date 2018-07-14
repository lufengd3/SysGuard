import * as React from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import FileList from '../../pages/file-list';
import Settings from '../../pages/settings';
import {routerPath} from '../../constant';
import * as style from './style.less';

class Mod extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Route exact pathName={routerPath.fileList} component={FileList}/>
        <Route pathName={routerPath.settings} component={Settings}/>
      </div>
    );
  }
}

export default Mod;