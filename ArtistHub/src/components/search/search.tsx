import React from 'react';
import './search.css';
import { APIMethodsCategories, InputChangeHandler, Track } from '../../services/types.ts';
import LastFM from '../../services/LastFM.ts';

interface SearchProps {
  onSearchDataChange: (data: Track[] | []) => void;
}

export default class Search extends React.Component<SearchProps> {
  state = {
    category: APIMethodsCategories.Track,
    input: '',
  };

  private lastFm = new LastFM();

  componentDidMount(): void {
    void this.lastFm.fetchSearchData(this.props.onSearchDataChange, this.state.category);
    const LSInput: string = localStorage.getItem('input') ?? '';
    this.setState({ input: LSInput });
  }

  handleInputChange = (evt: InputChangeHandler): void => {
    this.setState({ input: evt.target.value });
  };

  render(): React.JSX.Element {
    return (
      <section className="search">
        <label htmlFor="search" className="visually-hidden">
          Search the artist:
        </label>
        <input
          id="search"
          type="search"
          value={this.state.input}
          onChange={this.handleInputChange}
          className="search__input"
        />
        <button
          className="search__button"
          onClick={() => {
            void this.lastFm.fetchSearchData(this.props.onSearchDataChange, this.state.category, this.state.input);
            localStorage.setItem('input', this.state.input);
          }}
        ></button>
      </section>
    );
  }
}
