import {shell} from 'electron';
import * as React from 'react';
import * as QRcode from 'qrcode.react';
import * as ip from 'ip';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {getItem} from '../../../common/prefrence';
import * as style from './style.less';

const projConf = require('../../../config.json');
const url = `http://${ip.address()}:${projConf.HTTP_SERVER_PORT}`;

class Mod extends React.Component {

  _getCurrentFolderPath = () => {
    return getItem('servePath');
  }

  _openFolder = () => {
    const folder = this._getCurrentFolderPath();
    shell.openItem(folder);
  }

  _openUrl = () => {
    shell.openExternal(url);
  }

  render() {
    return (
      <div className={style.container}>
        {/* <div className={style.toolbar} onClick={this.handleBackBtnClick}>Back</div> */}
        {/* <iframe id={'fileListFrame'} frameBorder={0} src={url} />; */}
        <QRcode style={{width: '188px', height: '188px'}} value={url} />
        <div className={style.url} onClick={this._openUrl}>{url}</div>
        <DefaultButton
          primary={true}
          data-automation-id="openfolder"
          text="打开文件夹"
          onClick={this._openFolder}
          allowDisabledFocus={true}
        />
      </div>
    );
  }
}

export default Mod;
