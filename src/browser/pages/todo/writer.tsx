import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import * as style from './writer.less';

class Mod extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <TextField className={style.textField} />
      </div>
    );
  }
}

export default Mod;