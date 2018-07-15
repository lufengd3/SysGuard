import * as React from 'react';
import {Label} from 'office-ui-fabric-react/lib/Label';
import * as style from './style.less';

class Mod extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Label>版本：0.0.1</Label>
        <Label>源码：https://github.com/lufengd3/SysGuard</Label>
      </div>
    );
  }
}

export default Mod;