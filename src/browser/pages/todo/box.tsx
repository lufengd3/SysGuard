import * as React from 'react';
import TodoCard from './todocard';
import * as style from './box.less';

interface IProps extends React.Props<any> {
  classN: string;
  title: string;
}

class Mod extends React.Component<IProps, any> {
  render() {
    const classN = this.props.classN || '';

    return (
      <div className={`${style.box} ${classN}`}>
        {this.props.title}
        <TodoCard />
      </div>
    );
  }
}

export default Mod;