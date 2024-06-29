import React from 'react';
import './search.css';

export default class Search extends React.Component {
  render(): React.JSX.Element {
    return (
      <section className="search">
        <label htmlFor="search" className="visually-hidden">
          Search the artist:
        </label>
        <input id="search" type="search" placeholder="Search for artist..." className="search__input" />
        <button className="search__button"></button>
      </section>
    );
  }
}
