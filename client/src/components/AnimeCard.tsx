import { Link } from "react-router-dom";

import animeThumbnail from "../assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";

function AnimeCard() {
  return (
    <div className="card">
      <Link to="/anime">
        <img src={animeThumbnail} alt="fullmetal alchemist brotherhood" />
      </Link>
      <div className="card__info">
        <div className="status">
          <span className="dot plan-to-watch"></span>plan to watch
        </div>
        <hr />
        <h4>Fullmetal Alchemist: Brotherhood</h4>
      </div>
    </div>
  );
}

export default AnimeCard;
