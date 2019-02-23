import React, { Component } from 'react';
import SocialCard from './components/SocialCard';
import { slide as Menu } from 'react-burger-menu';
import './App.css';
import './ReactBurgerStyles.css';

interface IState {
  menuOn: boolean;
  backgroundColor: string;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menuOn: false,
      backgroundColor: 'rgb(85, 93, 112)'
    }
  };
  
  toogleMenu = () => {
    this.setState({menuOn: !this.state.menuOn});
  }

  toggleBgLight = () => {
    this.setState({ backgroundColor: 'rgb(248, 248, 248)' });
  }

  toggleBgDark = () => {
    this.setState({ backgroundColor: 'rgb(85, 93, 112)' });
  }

  render() {
    return (
      <div className="App" id="App" style={{ background: this.state.backgroundColor }}>
        <Menu>
          <a href="#" onClick={this.toggleBgLight} className="Menu__items">Light</a>
          <a href="#" onClick={this.toggleBgDark} className="Menu__items">Dark</a>
        </Menu>
        <div className="App__main">
          <SocialCard />
          <SocialCard />
          <SocialCard />
          <SocialCard />
          <SocialCard />
        </div>
      </div>
    );
  }
}

export default App;
