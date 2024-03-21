export class Anime implements EAnime {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  year: number;
  imageUrl: string;
  tags: string[];
  watchStatus: string;

  constructor(
    id: string,
    title: string,
    type: string,
    episodes: number,
    status: string,
    year: number,
    imageUrl: string,
    tags: string[],
    watchStatus: string
  ) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.episodes = episodes;
    this.status = status;
    this.year = year;
    this.imageUrl = imageUrl;
    this.tags = tags;
    this.watchStatus = watchStatus;
  }
}

export class AnimeCount implements EAnimeCount {
  watched!: number;
  watching!: number;
  planned!: number;
  stalled!: number;
  dropped!: number;
  
  constructor(animeCount: DAnimeCount[]) {
    animeCount.forEach((anime: DAnimeCount) => {
      this[anime.category] = anime.count;
    });
  }
}
