import React from 'react';
import './SocialCard.css';

interface IProps {
  name: string,
  // box_art: string
}

export default class SocialCard extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="SocialCard">
        <div className="SocialCard__header">
          <div className="SocialCard__header__photo"></div>
        </div>
        <div className="SocialCard__main">
          {this.props.name}
        </div>
      </div>
    )
  }
}