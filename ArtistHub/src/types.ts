export enum APIMethods {
  Search = 'search',
  GetTopTracks = 'getTopTracks',
}

export enum APIMethodsCategories {
  Artist = 'artist',
  Track = 'track',
  User = 'user',
  Chart = 'chart',
}

export enum APIResponseFormats {
  JSON = 'json',
  XML = '',
}

export interface APIRequestRequiredParams {
  APIMethodCategory: APIMethodsCategories;
  APIMethod: APIMethods;
  APIResponseFormat?: APIResponseFormats;
  APIResponseLimit?: number;
  APIResponsePage?: number;
}

export type APIRequestOptionalParams = Record<string, string> | Record<string, never>;

interface Track {
  name: string;
  artist: string;
  url: string;
  streamable: string;
  listeners: string;
  image: {
    '#text': string;
    size: string;
  }[];
  mbid: string;
}

interface ResultsType {
  [key: string]: unknown;
  trackmatches?: { track: Track[] };
}

export interface APIResponseType {
  results: ResultsType;
}

export interface InputChangeHandler {
  target: HTMLInputElement;
}
