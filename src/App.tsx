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

interface IStreamObject {
  community_ids: [];
  game_id: string;
  id: string;
  language: string;
  started_at: string;
  tag_ids: string[];
  thumbnail_url: string;
  title: string;
  type: string;
  user_id: string;
  user_name: string;
  viewer_count: number;
}

interface IState {
  menuOn: boolean;
  backgroundColor: string;
  gamesArray: IGameObject[];
  streamsArray: IStreamObject[];
  dataType: 'game' | 'stream';
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menuOn: false,
      backgroundColor: 'rgb(85, 93, 112)',
      gamesArray: [],
      streamsArray: [],
      dataType: 'game'
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
      this.setState({ gamesArray: response.data.data })
    });

    axios('https://api.twitch.tv/helix/streams?first=20', {
      headers: {
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      this.setState({ streamsArray: response.data.data });
    });
  }

  render() {
    const gamesSocialCards = this.state.gamesArray.map(theGame => (
      <SocialCard name={theGame.name} box_art={theGame.box_art_url} key={theGame.name} />
    ));

    const streamsSocialCards = this.state.streamsArray.map(theStream => (
      <SocialCard name={theStream.title} box_art={theStream.thumbnail_url} key={theStream.title} />
    ))

    return (
      <div className="App" id="App" style={{ background: this.state.backgroundColor }}>
        <Menu>
          <a href="#" onClick={this.toggleBgLight} className="Menu__items">Light</a>
          <a href="#" onClick={this.toggleBgDark} className="Menu__items">Dark</a>
        </Menu>
        <div className="App__main">
          {this.state.dataType === 'game' && gamesSocialCards}
          {this.state.dataType === 'stream' && streamsSocialCards}
        </div>
        <div className="the-select-div">
          <select className="the-select" name="" id="">
            <option value="novalue">novalue</option>
          </select>
        </div>
      </div>
    );
  }
}

export default App;
