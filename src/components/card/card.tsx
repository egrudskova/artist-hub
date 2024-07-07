import './card.css';
import React from 'react';

export interface CardProps {
  name: string;
  listeners: string;
  image: { '#text': string }[];
  url: string;
  artist: { name: string; url: string; mbid: string } | string;
}

export default class Card extends React.Component<CardProps> {
  render(): React.JSX.Element {
    return (
      <li className="card">
        <a href={this.props.url} className="card__link">
          <div className="card__inner">
            <h3 className="card__header">{this.props.name}</h3>
            <p className="card__artist">
              by {typeof this.props.artist === 'object' ? this.props.artist.name : this.props.artist}
            </p>
            <p className="card__listeners">{this.props.listeners} listeners</p>
          </div>
          <img src={this.props.image.slice(-1)[0]['#text']} alt="Artist photo" className="card__image" />
        </a>
      </li>
    );
  }
}
