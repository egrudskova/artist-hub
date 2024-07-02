import React from 'react';
import './search.css';
import { buildApiRequest } from '../../utils.ts';
import { APIMethods, APIMethodsCategories, APIResponseType, InputChangeHandler } from '../../types.ts';

export default class Search extends React.Component {
  state = {
    result: [],
    input: '',
  };

  handleInputChange = (evt: InputChangeHandler): void => {
    this.setState({ input: evt.target.value });
  };

  fetchSearchData = async (input: string): Promise<void> => {
    const response = await fetch(
      buildApiRequest({
        userInput: input,
        APIMethodCategory: APIMethodsCategories.Track,
        APIMethod: APIMethods.Search,
      })
    );
    const json: APIResponseType = (await response.json()) as APIResponseType;
    this.setState({ result: json.results[`${APIMethodsCategories.Track}matches`] });
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
            void this.fetchSearchData(this.state.input);
          }}
        ></button>
      </section>
    );
  }
}
