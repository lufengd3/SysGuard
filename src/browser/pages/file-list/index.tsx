import {shell} from 'electron';
import * as React from 'react';
import * as QRcode from 'qrcode.react';
import * as ip from '../../../node/ip';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {Dropdown} from 'office-ui-fabric-react/lib/Dropdown';
import {Label} from 'office-ui-fabric-react/lib/Label';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import {getItem} from '../../../common/prefrence';
import * as style from './style.less';

const projConf = require('../../../config.json');
const ipList: string[] = ip.getIpList();
const urlList = ipList.map((ip) => {
  return `http://${ip}:${projConf.HTTP_SERVER_PORT}`;
});

class Mod extends React.Component {
  folder: string;
  state = {
    url: urlList[0]
  };


  componentWillMount() {
    this.folder = getItem('servePath');
  }

  _openFolder = () => {
    shell.openItem(this.folder);
  }

  _openUrl = () => {
    shell.openExternal(this.state.url);
  }

  render() {
    const {url} = this.state;
    const dropdownOpts = urlList.map((item) => {
      return {
        key: item,
        text: item
      };
    });

    return (
      <div className={style.container}>
        <div className={style.itemGroup}>
          <TextField label="共享的文件夹" disabled={true} placeholder={this.folder} className={style.input} />
          <DefaultButton
            primary={true}
            text="打开"
            onClick={this._openFolder}
            allowDisabledFocus={true}
          />
        </div>

        <div className={style.itemGroup}>
          <TextField label="URL 地址" disabled={true} placeholder={url} className={style.input} />
          <DefaultButton
            primary={true}
            text="打开"
            onClick={this._openFolder}
            allowDisabledFocus={true}
          />
        </div>

        {/* <div className={style.itemGroup}>
          <Dropdown
            label="URL 地址"
            defaultSelectedKey={url}
            options={dropdownOpts}
            className={style.input}
          />
          <DefaultButton
            primary={true}
            text="打开"
            onClick={this._openUrl}
            allowDisabledFocus={true}
          />
        </div> */}

        <div className={style.itemGroupColumn}>
          <Label>扫码访问</Label>
          <div className={style.centerContainer}>
            <QRcode style={{width: '188px', height: '188px'}} value={url} />
          </div>
        </div>
      </div>
    );
  }
}

export default Mod;
