import React from 'react';
import './SocialCard.css';
import { string } from 'prop-types';

interface IProps {
  name: string,
  box_art: string
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
    const widthHeight: { [index: string]: string } = {
      '{width}': '70',
      '{height}': '70',
    };

    setTimeout(() => {
      this.setState({ imageUrl: this.props.box_art.replace(/{width}|{height}/gi, matched => {
        return widthHeight[matched];
      })});
      console.log(this.state.imageUrl);
    }, 500)
    
    // console.log(this.state.imageUrl);
  }

  render() {
    return (
      <div className="SocialCard">
        <div className="SocialCard__header">
          <div className="SocialCard__header__photo">
            <img src={this.state.imageUrl} />
          </div>
        </div>
        <div className="SocialCard__main">
          {this.props.name}
        </div>
      </div>
    )
  }
}