import React from 'react';
import './Menu.css';

interface IState {
  menuOn: boolean;
}

interface IProps {
  toggleMenu: () => void;
}

export default class Menu extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="Menu">
        <button onClick={this.props.toggleMenu}>Menu</button>
      </div>
    );
  }
}