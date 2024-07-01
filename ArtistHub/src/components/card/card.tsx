import './card.css';
import React from 'react';

export interface CardProps {
  name: string;
  description: string;
  image?: string;
  url: string;
}

export default class Card extends React.Component<CardProps> {
  render(): React.JSX.Element {
    return (
      <li className="card">
        <a href={this.props.url} className="card__link">
          <div className="card__inner">
            <h3 className="card__header">{this.props.name}</h3>
            <p className="card__description">{this.props.description}</p>
          </div>
          <img src={this.props.image ?? '#'} alt="Artist photo" className="card__image" />
        </a>
      </li>
    );
  }
}
