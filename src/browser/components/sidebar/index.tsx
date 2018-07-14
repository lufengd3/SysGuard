import * as React from 'react';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {NavLink} from 'react-router-dom';
import {routerPath} from '../../constant';
import * as style from './style.less';

type menu = {
  name: string,
  icon: string,
  path: string,
};
type menuData = Array<menu>;

export default class NavBasicExample extends React.Component<any, any> {
  data: menuData;

  constructor(props: INavProps) {
    super(props);

    this.data = [{
      name: '浏览',
      icon: 'CompassNW',
      path: routerPath.fileList
    }, {
      name: '设置',
      icon: 'Settings',
      path: routerPath.settings
    }];

    this.state = {
      selectedIndex: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selectedIndex !== this.state.selectedIndex;
  }

  public render(): JSX.Element {
    const {selectedIndex} = this.state;
    return (
      <div className={style.container}>
        <ul>
          {this.data.map((item, index) => {
            const active: boolean = selectedIndex === index;
            console.log(item.path)

            return (
              <li className={style.menu} 
                key={index} 
                onClick={() => {
                  this._handleClick(index);
                }}
              >
                <div className={active ? style.menuItemActive : style.menuItem}>
                  <Icon iconName={item.icon} className={style.icon} />
                  <NavLink to={item.path} className={style.text}>
                    {item.name}
                  </NavLink>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  private _handleClick = (index: number): void => {
    this.setState({
      selectedIndex: index
    });
  }

}