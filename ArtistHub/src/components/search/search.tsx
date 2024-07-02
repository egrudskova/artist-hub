import React from 'react';
import './search.css';
import { buildApiRequest } from '../../utils.ts';
import {
  APIMethods,
  APIMethodsCategories,
  APIRequestOptionalParams,
  APIRequestRequiredParams,
  APIResponseType,
  InputChangeHandler,
} from '../../types.ts';

export default class Search extends React.Component {
  state = {
    category: APIMethodsCategories.Track,
    result: [],
    input: '',
  };

  componentDidMount(): void {
    void this.fetchSearchData(...this.prepareFetchParams());
    const LSInput: string = localStorage.getItem('input') ?? '';
    this.setState({ input: LSInput });
  }

  handleInputChange = (evt: InputChangeHandler): void => {
    this.setState({ input: evt.target.value });
  };

  prepareFetchParams = (input?: string): [APIRequestRequiredParams, APIRequestOptionalParams] => {
    let required: APIRequestRequiredParams;
    let optional: APIRequestOptionalParams = {};
    if (input) {
      required = {
        APIMethodCategory: this.state.category,
        APIMethod: APIMethods.Search,
      };
      optional = { [this.state.category]: this.state.input };
    } else {
      required = {
        APIMethodCategory: APIMethodsCategories.Chart,
        APIMethod: APIMethods.GetTopTracks,
      };
    }
    return [required, optional];
  };

  fetchSearchData = async (
    requiredParams: APIRequestRequiredParams,
    optionalParams: APIRequestOptionalParams
  ): Promise<void> => {
    const response = await fetch(buildApiRequest(requiredParams, optionalParams));
    const json: APIResponseType = (await response.json()) as APIResponseType;
    this.setState({ result: json });
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
            void this.fetchSearchData(...this.prepareFetchParams(this.state.input));
            localStorage.setItem('input', this.state.input);
          }}
        ></button>
      </section>
    );
  }
}
