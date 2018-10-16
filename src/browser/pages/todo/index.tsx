import * as React from 'react';
import Box from './box';
import Writer from './writer';
import * as style from './index.less';

class Mod extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Writer />
        <div className={style.boxContainer}>
          <div className={style.boxRow}>
            <Box classN={`${style.box} ${style.redbox}`} title={'重要且紧急'} />
            <Box classN={`${style.box} ${style.greenbox}`} title={'重要不紧急'} />
          </div>
          <div className={style.boxRow}>
            <Box classN={`${style.box} ${style.bluebox}`} title={'紧急不重要'} />
            <Box classN={`${style.box} ${style.yellowbox}`} title={'不紧急不重要'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Mod;