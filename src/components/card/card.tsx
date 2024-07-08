import './card.css';
import React from 'react';

export interface CardProps {
  name: string;
  listeners: string;
  image: { '#text': string }[];
  url: string;
  artist: { name: string; url: string; mbid: string } | string;
}

const Card = ({ url, name, artist, listeners, image }: CardProps): React.JSX.Element => {
  return (
    <li className="card">
      <a href={url} className="card__link">
        <div className="card__inner">
          <h3 className="card__header">{name}</h3>
          <p className="card__artist">by {typeof artist === 'object' ? artist.name : artist}</p>
          <p className="card__listeners">{listeners} listeners</p>
        </div>
        <img src={image.slice(-1)[0]['#text']} alt="Artist photo" className="card__image" />
      </a>
    </li>
  );
};

export default Card;
