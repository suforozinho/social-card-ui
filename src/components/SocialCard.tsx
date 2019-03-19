import React from 'react';
import './SocialCard.css';
import { string } from 'prop-types';

interface IProps {
  name: string,
  box_art: string,
  dataType: 'game' | 'stream'
}

interface IState {
  imageUrl: string
}

export default class SocialCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      imageUrl: ''
    }
  }

  componentDidMount() {
    let widthHeight: { [index: string]: string };

    if (this.props.dataType === 'game') {
      widthHeight = {
        '{width}': '300',
        '{height}': '400',
      };
      
    } else {
      widthHeight = {
        '{width}': '400',
        '{height}': '225',
      };
    }
    
    console.log(this.props.dataType);
    
    setTimeout(() => {
      this.setState({ imageUrl: this.props.box_art.replace(/{width}|{height}/gi, matched => {
        return widthHeight[matched];
      })});
    }, 500);
  };

  render() {
    return (
      <div className="SocialCard" style={{
        width: this.props.dataType === 'game' ? '18.7em' : '25em'
      }}>
        <div className="SocialCard__header" style={{
          height: this.props.dataType === 'stream' ? '225px' : '400px',
        }}>
          <img src={this.state.imageUrl} alt=""/>
        </div>
        <div className="SocialCard__main">
          {this.props.name}
        </div>
      </div>
    )
  }
}