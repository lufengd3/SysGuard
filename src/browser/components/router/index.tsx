import * as React from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import FileList from '../../pages/file-list';
import Setting from '../../pages/setting';
import {routerPath} from '../../constant';
import * as style from './style.less';

class Mod extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Route exact path={routerPath.fileList} component={FileList}/>
        <Route path={routerPath.setting} component={Setting}/>
      </div>
    );
  }
}

export default Mod;