interface IProps {
  items: IAnime[];
}

function AnimePopup({ items }: IProps) {
  return (
    <div className="anime-popup">
      {items.map((item) => (
        <div key={item.id} className="anime-popup__item">
          <img src={item.picture} alt={item.title} />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default AnimePopup;
