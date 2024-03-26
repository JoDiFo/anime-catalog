import { Link } from "react-router-dom";

function AnimePopup({ items }: { items: EAnime[] }) {
  return (
    <div className="anime-popup">
      {items.slice(0, 20).map((item) => (
        <Link key={item.id} to={"/anime"} state={{ id: item.id }}>
          <div className="anime-popup__item">
            <img src={item.imageUrl} alt={item.title} />
            <div>{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AnimePopup;
