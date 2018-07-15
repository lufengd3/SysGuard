import * as React from 'react';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import {DefaultButton} from 'office-ui-fabric-react/lib/Button';
import {getItem} from '../../../common/prefrence';
import * as style from './style.less';

export default class TextFieldPlaceholderExample extends React.Component<any, any> {
  folder: string;

  componentWillMount() {
    this.folder = getItem('servePath');
  }

  private _save = () => {

  }

  public render(): JSX.Element {
    return (
      <div className={style.container}>
        {/* <TextField placeholder="I am a placeholder." ariaLabel="Please enter text here" /> */}
        <div className={style.formGroup}>
          <TextField label="共享文件夹" disabled={true} placeholder={this.folder} />
        </div>

        <div className={style.formGroup}>
          <DefaultButton
            primary={true}
            data-automation-id="openfolder"
            text="保存"
            onClick={this._save}
            allowDisabledFocus={true}
          />
        </div>
      </div>
    );
  }
}