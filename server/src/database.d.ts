interface DAnime {
  id: string;
  title: string;
  type: string;
  episodes: number;
  year: number;
  image_url: string;
  status: string;
}

interface DUser {
  id: number;
  username: string;
  email: string;
  password: string;
  register_date: string;
  image_url: string;
  token: string;
}

interface DTag {
  id: number;
  name: string;
}

interface DAnimeTag {
  id: number;
  anime_id: number;
  tag_id: number;
}

interface DUserCategory {
  id: number;
  user_id: number;
  anime_id: number;
  category: string;
}
