import * as React from 'react';

interface ITypewriterProps {
  children: string
}

interface ITypewriterState {
  counter: number
}

class Mod extends React.Component<ITypewriterProps, ITypewriterState> {
  constructor(props: ITypewriterProps) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    setInterval(this.updateMessage, 80);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.counter > this.props.children.length) {
      this.setState({
        counter: 0
      });
    }
  }
  
  updateMessage = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    const {counter} = this.state;
    const originalMessage = this.props.children;
    const message = originalMessage.slice(0, counter);

    return (
      <span>
        {message}
      </span>
    );
  }
}

export default Mod;