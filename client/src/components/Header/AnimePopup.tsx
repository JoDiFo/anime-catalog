import { IAnime } from "../../types";
import { Link } from "react-router-dom";

interface IProps {
  items: IAnime[];
}

function AnimePopup({ items }: IProps) {
  return (
    <div className="anime-popup">
      {items.slice(0, 20).map((item) => (
        <Link key={item._id} to={"/anime"} state={{ id: item._id }}>
          <div className="anime-popup__item">
            <img src={item.picture} alt={item.title} />
            <div>{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AnimePopup;
