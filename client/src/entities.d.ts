interface EAnime {
  _id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  year: number;
  picture: string;
  synonyms: string[];
  tags: string[];
  watchStatus: EAnimeWatchStatus;
}

type EAnimeWatchStatus =
  | "not-watched"
  | "watched"
  | "watching"
  | "plan-to-watch"
  | "stalled"
  | "dropped";

interface ETag {
  _id: number;
  value: string;
}

interface EUser {
  _id: string;
  username: string;
  registerDate: string;
  email: string;
  password: string;
  profileImage: string;
}

type EAnimeCategoryOption =
  | "all"
  | "watched"
  | "watching"
  | "plan-to-watch"
  | "stalled"
  | "dropped";
