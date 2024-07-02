export enum APIMethods {
  Search = 'search',
}

export enum APIMethodsCategories {
  Artist = 'artist',
  Track = 'track',
  User = 'user',
}

export enum APIResponseFormats {
  JSON = 'json',
  XML = '',
}

export interface APIRequestParams {
  userInput: string;
  APIMethodCategory: APIMethodsCategories;
  APIMethod: APIMethods;
  APIResponseFormat?: APIResponseFormats;
  APIResponseLimit?: number;
  APIResponsePage?: number;
}

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
