import { AnimeCard } from "./index";

function CardContainer({ items }: any) {
  return (
    <div className="profile-page__list card-container">
      {items &&
        items.map((item: any) => (
          <AnimeCard key={item.id} animeThumbnail={item.picture} title={item.title} />
        ))}
    </div>
  );
}

export default CardContainer;
