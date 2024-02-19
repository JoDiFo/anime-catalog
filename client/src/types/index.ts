interface IAnime {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  animeSeason: IAnimeSeason;
  picture: string;
  synonyms: string[];
  tags: string[];
}

interface IAnimeSeason {
  season: string;
  year: number;
}

interface IAnimeList {
  items: IAnime[];
}

interface ITag {
  id: number;
  value: string;
}
