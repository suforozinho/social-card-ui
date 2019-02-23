import React from 'react';
import './SocialCard.css';

export default class SocialCard extends React.Component<{}, {}> {
  render() {
    return (
      <div className="SocialCard">
        <div className="SocialCard__header">
          <div className="SocialCard__header__photo"></div>
        </div>
        <div className="SocialCard__main">
        </div>
      </div>
    )
  }
}