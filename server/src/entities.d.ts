interface EAnime {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  year: number;
  image_url: string;
  tags: string[];
  watch_status: string;
}

interface ETag {
  id: number;
  name: string;
}

interface EUser {
  id: number;
  username: string;
  registerDate: string;
  email: string;
  password: string;
  watched: string[];
  watching: string[];
  planToWatch: string[];
  stalled: string[];
  dropped: string[];
  token: string;
  image_url: string;
}

interface EUserLoginData {
  isValid: boolean;
  id: number;
  username: string;
  registerDate: string;
  image_url: string;
  token: string;
}

interface EAnimeCount {
  watched: number;
  watching: number;
  plan_to_watch: number;
  stalled: number;
  dropped: number;
}

// TODO rename plan_to_watch to planned
type EAnimeCategory =
  | "watched"
  | "watching"
  | "plan_to_watch"
  | "stalled"
  | "dropped";
