import * as React from 'react';
import {Route} from 'react-router-dom';
import routeConf from '../../route-conf';
import * as style from './style.less';

class Mod extends React.Component {
  render() {
    return (
      <div className={style.container}>
        {routeConf.map((item, index) => {
          return <Route exact path={item.path} component={item.component} key={index} />;
        })}
      </div>
    );
  }
}

export default Mod;