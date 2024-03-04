export interface ID {
  id: string;
}

export interface RegisterData {
  input: IUserData;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface IUserData {
  username: string;
  registerDate: string;
  email: string;
  password: string;
  watched: string[];
  watching: string[];
  "plan-to-watch": string[];
  stalled: string[];
  dropped: string[];
}

export interface IUser {
  _id: string;
  username: string;
  registerDate: string;
  email: string;
  password: string;
  watched: string[];
  watching: string[];
  planToWatch: string[];
  stalled: string[];
  dropped: string[];
}

export interface IAnime {
  _id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  animeSeason: IAnimeSeason;
  picture: string;
  tags: string[];
  watchStatus: string;
}

interface IAnimeSeason {
  season: string;
  year: number;
}
