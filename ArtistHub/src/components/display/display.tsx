import React from 'react';
import './display.css';
import ArtistCard, { ArtistProps } from '../artist/artist-card.tsx';

interface DisplayProps {
  artists: ArtistProps[];
}

export default class Display extends React.Component<DisplayProps> {
  render(): React.JSX.Element {
    return (
      <section className="display">
        <h2 className="display__heading visually-hidden">Search results</h2>
        <ul className="display__list">
          {this.props.artists.map((artist: ArtistProps) => (
            <ArtistCard
              key={Math.random()}
              name={artist.name}
              description={artist.description}
              image={artist.image}
              url={artist.url}
            ></ArtistCard>
          ))}
        </ul>
      </section>
    );
  }
}
