import * as React from 'react';
import { Checkbox, ICheckboxStyles } from 'office-ui-fabric-react/lib/Checkbox';
import Draggable from 'react-draggable';
import * as style from './todocard.less';

interface IState {
  isChecked: boolean;
}

class Mod extends React.Component<any, IState> {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  private _onCheckboxChange = (ev: React.FormEvent<HTMLElement>, isChecked: boolean): void => {
    this.setState({
      isChecked
    });
  }

  render() {
    const {isChecked} = this.state;
    const checkboxStyle: ICheckboxStyles = {
      text: {
        textDecoration: isChecked ? 'line-through' : 'none'
      }
    };
    
    return (
      <Draggable>
        <div className={style.container}>
          <Checkbox label="Hello" onChange={this._onCheckboxChange} ariaDescribedBy={'descriptionID'} styles={checkboxStyle} />
        </div>
      </Draggable>
    );
  }
}

export default Mod;