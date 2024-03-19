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
