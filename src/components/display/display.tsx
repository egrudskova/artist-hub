import React from 'react';
import './display.css';
import Card, { CardProps } from '../card/card.tsx';

interface DisplayProps {
  cards: CardProps[];
}

const Display = ({ cards }: DisplayProps): React.JSX.Element => {
  return (
    <section className="display">
      <h2 className="display__heading visually-hidden">Search results</h2>
      <ul className="display__list">
        {cards.map((card: CardProps) => (
          <Card
            key={Math.random()}
            name={card.name}
            listeners={card.listeners}
            image={card.image}
            url={card.url}
            artist={card.artist}
          ></Card>
        ))}
      </ul>
    </section>
  );
};

export default Display;
