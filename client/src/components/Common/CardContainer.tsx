import { AnimeCard } from "../index";
import "./CardContainer.scss";

function CardContainer({ items }: { items: EAnime[] }) {
  return (
    <div className="page__list card-container">
      {items.length !== 0
        ? items.map((item: EAnime) => (
            <AnimeCard
              key={item.id}
              id={item.id}
              animeThumbnail={item.imageUrl}
              title={item.title}
              watchStatus={item.watchStatus}
            />
          ))
        : null}
    </div>
  );
}

export default CardContainer;
