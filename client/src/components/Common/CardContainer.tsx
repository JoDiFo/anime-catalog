import { AnimeCard } from "../index";

function CardContainer({ items }: IAnimeList) {
  return (
    <div className="profile-page__list card-container">
      {items &&
        items.map((item: IAnime) => (
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
