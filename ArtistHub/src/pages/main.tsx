import './main.css';
import React from 'react';
import Search from '../components/search/search.tsx';
import Display from '../components/display/display.tsx';
import { getRandomInt } from '../utils.ts';
import { ArtistProps } from '../components/artist/artist-card.tsx';
import Logo from '../assets/images/logo.svg?react';

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
      <>
        <header className="header">
          <a href="#" className="header__link">
            <Logo></Logo>
          </a>
          <Search></Search>
        </header>
        <main className="main">
          <h1 className="main__heading visually-hidden">Main page</h1>
          <Display artists={mockData}></Display>
        </main>
      </>
    );
  }
}
