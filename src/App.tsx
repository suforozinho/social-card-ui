import axios from 'axios';
import React, { Component } from 'react';
import SocialCard from './components/SocialCard';
import { slide as Menu } from 'react-burger-menu';
import './App.css';
import './ReactBurgerStyles.css';

interface IGameObject {
  box_art_url: string;
  id: number,
  name: string,
}

interface IState {
  menuOn: boolean;
  backgroundColor: string;
  gamesArray: IGameObject[];
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menuOn: false,
      backgroundColor: 'rgb(85, 93, 112)',
      gamesArray: []
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

  componentDidMount() {
    axios('https://api.twitch.tv/helix/games/top', {
      headers: {
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      console.log(response.data.data);
      this.setState({ gamesArray: response.data.data })
    });
  }

  render() {
    const gamesSocialCards = this.state.gamesArray.map(theGame => (
      <SocialCard name={theGame.name} box_art={theGame.box_art_url} key={theGame.name} />
    ))

    return (
      <div className="App" id="App" style={{ background: this.state.backgroundColor }}>
        <Menu>
          <a href="#" onClick={this.toggleBgLight} className="Menu__items">Light</a>
          <a href="#" onClick={this.toggleBgDark} className="Menu__items">Dark</a>
        </Menu>
        <div className="App__main">
          {gamesSocialCards}
        </div>
      </div>
    );
  }
}

export default App;
