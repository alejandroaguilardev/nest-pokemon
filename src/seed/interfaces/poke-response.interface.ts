export interface PokeResponse {
  count: number;
  next: number;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
