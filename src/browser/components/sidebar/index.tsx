import * as React from 'react';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {NavLink} from 'react-router-dom';
import routeConf from '../../route-conf';
import * as style from './style.less';

const LINK_CLASS_NAME = 'route-link-item';

export default class NavBasicExample extends React.Component<any, any> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      selectedIndex: null
    };
  }

  componentDidMount() {
    this._updateHelight();
  }

  public render(): JSX.Element {
    const {selectedIndex} = this.state;

    return (
      <div className={style.container}>
        {routeConf.map((item, index) => {
          const active: boolean = selectedIndex == index;

          return (
            <NavLink
              exact
              to={item.path}
              className={LINK_CLASS_NAME + ' ' + style.link}
              key={index}
              onClick={() => {
                this._handleClick(index);
              }}
            >
              <div className={active ? style.menuItemActive : style.menuItem}>
                <Icon iconName={item.icon} className={style.icon} />
                <span>{item.name}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }

  private _updateHelight = () => {
    const linkList = document.querySelectorAll(`.${LINK_CLASS_NAME}`);

    for (let i = 0; i < linkList.length; i++) {
      const item = linkList[i];
      const classList = item.getAttribute('class').split(' ');

      if (classList.indexOf('active') > -1) {
        this.setState({
          selectedIndex: i
        });
        break;
      }
    }
  }

  private _handleClick = (index) => {
    this.setState({
      selectedIndex: index
    });
  }

}