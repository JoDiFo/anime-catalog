export default class Anime implements EAnime {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  year: number;
  image_url: string;
  tags: string[];
  watch_status: string;

  constructor(
    id: string,
    title: string,
    type: string,
    episodes: number,
    status: string,
    year: number,
    image_url: string,
    tags: string[],
    watch_status: string
  ) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.episodes = episodes;
    this.status = status;
    this.year = year;
    this.image_url = image_url;
    this.tags = tags;
    this.watch_status = watch_status;
  }
}
