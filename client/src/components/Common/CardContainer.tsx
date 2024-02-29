import { IAnime, IAnimeList } from "../../types";
import { AnimeCard } from "../index";

function CardContainer({ items }: IAnimeList) {
  return (
    <div className="profile-page__list card-container">
      {items.length !== 0
        ? items.map((item: IAnime) => (
            <AnimeCard
              key={item._id}
              id={item._id}
              animeThumbnail={item.picture}
              title={item.title}
            />
          ))
        : null}
    </div>
  );
}

export default CardContainer;
