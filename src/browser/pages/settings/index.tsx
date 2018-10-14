import * as electron from 'electron';
import * as React from 'react';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {setItem, getItem, SERVE_KEY} from '../../../common/prefrence';
import {FILE_SREVER_RELOAD} from '../../../common/ipc-channel';
import * as style from './style.less';

const {dialog} = electron.remote;
const {ipcRenderer} = electron;

interface IState {
  folder: string;
}

export default class TextFieldPlaceholderExample extends React.Component<any, IState> {
  folderChanged: boolean;

  constructor(props) {
    super(props);

    this.folderChanged = false;
    this.state = {
      folder: getItem(SERVE_KEY)
    }
  }

  componentWillUnmount() {
    if (this.folderChanged) {
      if (confirm('文件夹已更改，是否保存?')) {
        this._save(true);
      }
    }
  }

  private _save = (disableTip = false) => {
    this.folderChanged = false;
    setItem(SERVE_KEY, this.state.folder);
    ipcRenderer.send(FILE_SREVER_RELOAD);

    if (!disableTip) {
      alert('共享文件夹修改成功!');
    }
  }

  private _cancel = () => {
    this.setState({
      folder: getItem(SERVE_KEY)
    });
  }

  private _chooseFolder = () => {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, (res) => {
      if (Array.isArray(res) && res[0]) {
        this.folderChanged = true;
        this.setState({
          folder: res[0]
        });
      }
    });
  }

  public render(): JSX.Element {
    return (
      <div className={style.container}>
        {/* <TextField placeholder="I am a placeholder." ariaLabel="Please enter text here" /> */}
        <div className={style.formGroup} onClick={this._chooseFolder}  >
          <TextField
            label="修改文件夹"
            disabled={true}
            placeholder={this.state.folder}
            iconProps={{ iconName: 'More' }}
            className={style.textfiled}
          />
        </div>

        <div className={style.btnGroup}>
          <DefaultButton
            primary={false}
            data-automation-id="openfolder"
            text="取消"
            onClick={this._cancel}
            allowDisabledFocus={true}
            className={style.btn}
          />
          <DefaultButton
            primary={true}
            data-automation-id="openfolder"
            text="保存"
            onClick={() => {this._save()}}
            allowDisabledFocus={true}
            className={style.btn}
          />
        </div>
      </div>
    );
  }
}