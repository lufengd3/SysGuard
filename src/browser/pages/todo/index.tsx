import * as React from 'react';
import Box from './box';
import * as style from './index.less';

class Mod extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div>
          <Box />
          <Box />
        </div>
        <div>
          <Box />
          <Box />
        </div>
      </div>
    );
  }
}

export default Mod;