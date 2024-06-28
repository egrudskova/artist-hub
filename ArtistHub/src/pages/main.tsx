import './main.css';
import React from 'react';
import Search from '../components/search/search.tsx';
import Display from '../components/display/display.tsx';
import { getRandomInt } from '../utils.ts';
import { ArtistProps } from '../components/artist/artist-card.tsx';

const createMockArtist = (): ArtistProps => ({
  name: 'Artist name',
  description: 'Lorem ipsum'.repeat(getRandomInt(1, 5)),
  image: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100).toString()}`,
  url: '#',
});

const mockData: ArtistProps[] = [];
for (let i = 0; i < getRandomInt(5, 20); i++) {
  mockData.push(createMockArtist());
}

export default class MainPage extends React.Component {
  render(): React.JSX.Element {
    return (
      <div className="main">
        <Search></Search>
        <Display artists={mockData}></Display>
      </div>
    );
  }
}
