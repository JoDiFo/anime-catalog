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
  planToWatch: string[];
  stalled: string[];
  dropped: string[];
}

export interface IAddAnime {
  userId: string;
  animeId: string;
  input: string;
}