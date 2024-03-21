interface EAnime {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  year: number;
  imageUrl: string;
  synonyms: string[];
  tags: string[];
  watchStatus: EAnimeWatchStatus;
}

type EAnimeWatchStatus =
  | "not-watched"
  | "watched"
  | "watching"
  | "planned"
  | "stalled"
  | "dropped";

interface ETag {
  id: number;
  value: string;
}

interface EUser {
  id: string;
  username: string;
  registerDate: string;
  email: string;
  password: string;
  imageUrl: string;
}

interface EAnimeCount {
  watched: number;
  watching: number;
  planned: number;
  stalled: number;
  dropped: number;
}

type EAnimeCategoryOption =
  | "all"
  | "watched"
  | "watching"
  | "planned"
  | "stalled"
  | "dropped";
