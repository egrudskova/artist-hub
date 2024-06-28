import './artist-card.css';
import React from 'react';

export interface ArtistProps {
  name: string;
  description: string;
  image?: string;
  url: string;
}

export default class ArtistCard extends React.Component<ArtistProps> {
  render(): React.JSX.Element {
    return (
      <li className="card">
        <a href={this.props.url} className="card__link">
          <div className="card__inner">
            <h2 className="card__header">{this.props.name}</h2>
            <p className="card__description">{this.props.description}</p>
          </div>
          <img src={this.props.image ?? '#'} alt="Artist photo" className="card__image" />
        </a>
      </li>
    );
  }
}
