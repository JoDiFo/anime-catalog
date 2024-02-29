export interface IAnime {
  _id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  animeSeason: IAnimeSeason;
  picture: string;
  synonyms: string[];
  tags: string[];
}

export interface IAnimeSeason {
  season: string;
  year: number;
}

export interface IAnimeList {
  items: IAnime[];
}

export interface ITag {
  _id: number;
  value: string;
}

export type IWatchCategory =
  | "watching"
  | "watched"
  | "plan to watch"
  | "wont watch"
  | "stalled";
