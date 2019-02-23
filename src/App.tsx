import React, { Component } from 'react';
import Menu from './components/Menu';
import SocialCard from './components/SocialCard';
import './App.css';

interface IState {
  menuOn: boolean;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menuOn: false
    }
  };

  toogleMenu = () => {
    this.setState({menuOn: !this.state.menuOn});
  }

  toggleBgLight = () => {
    const theApp = document.getElementById('App');
    theApp ? theApp.style.background = 'rgb(248, 248, 248)' : null;
  }

  toggleBgDark = () => {
    const theApp = document.getElementById('App');
    theApp ? theApp.style.background = 'rgb(85, 93, 112)' : null;
  }

  render() {
    return (
      <div className="App" id="App">
        <Menu toggleMenu={this.toogleMenu} />
        {this.state.menuOn &&
        <div className="Menu__options">
          <button>Light</button>
          <button>Dark</button>
        </div>}
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
