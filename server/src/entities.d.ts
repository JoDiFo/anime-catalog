interface EAnime {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  year: number;
  imageUrl: string;
  tags: string[];
  watchStatus: string;
}

interface ETag {
  id: number;
  value: string;
}

interface EUser {
  id: number;
  username: string;
  registerDate: string;
  email: string;
  password: string;
  watched: string[];
  watching: string[];
  planned: string[];
  stalled: string[];
  dropped: string[];
  token: string;
  imageUrl: string;
}

interface EUserLoginData {
  isValid: boolean;
  id: number;
  username: string;
  registerDate: string;
  imageUrl: string;
  refreshToken: string;
  accessToken: string;
}

interface EAnimeCount {
  watched: number;
  watching: number;
  planned: number;
  stalled: number;
  dropped: number;
}

type EAnimeCategory =
  | "watched"
  | "watching"
  | "planned"
  | "stalled"
  | "dropped";
