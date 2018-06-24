import * as React from 'react';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import {NavLink} from 'react-router-dom';
import {routerPath} from '../../constant';
import * as style from './style.less';

export default class NavBasicExample extends React.Component<any, any> {
  constructor(props: INavProps) {
    super(props);
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className={style.container}>
        <ul className="header">
          <li><NavLink to={routerPath.fileList}>fl</NavLink></li>
          <li><NavLink to={routerPath.setting}>set</NavLink></li>
        </ul>
      </div>
    );
  }

  private _onClickHandler(e: React.MouseEvent<HTMLElement>): false {
    alert('test');
    return false;
  }

  private _onClickHandler2(e: React.MouseEvent<HTMLElement>): false {
    return false;
  }
}