import { AnimeCard } from "@/widgets/AnimeCard";
import cls from "./CardContainer.module.scss";

function CardContainer({ items }: { items: EAnime[] }) {
  return (
    <div className={cls.CardContainer}>
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
