import { AnimeCard } from "./index";

function CardContainer({ items }: any) {
  return (
    <div className="profile-page__list card-container">
      {items &&
        items.length !== 0 &&
        items.map((item: any) => (
          <AnimeCard animeThumbnail={item.picture} title={item.title} />
        ))}
    </div>
  );
}

export default CardContainer;
