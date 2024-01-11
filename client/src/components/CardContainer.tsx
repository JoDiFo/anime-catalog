import { AnimeCard } from "./index";

interface AnimeList {
  items: Anime[]
}

type Anime = {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  animeSeason: AnimeSeason;
  picture: string;
  synonyms: string[];
  tags: string[];
}

type AnimeSeason = {
  season: string;
  year: number;
}

function CardContainer({ items }: AnimeList) {
  return (
    <div className="profile-page__list card-container">
      {items &&
        items.map((item: any) => (
          <AnimeCard
            key={item.id}
            id={item.id}
            animeThumbnail={item.picture}
            title={item.title}
          />
        ))}
    </div>
  );
}

export default CardContainer;
