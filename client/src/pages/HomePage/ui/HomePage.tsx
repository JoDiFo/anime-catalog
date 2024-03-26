import thumbnailImage from "@/shared/assets/thumbnail-image.png";

function HomePage() {
  return (
    <main className="page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
        <h3>Welcome to Anime Catalog</h3>
        <p>Discover new anime, track your progress</p>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="page__section">
            <h3>POPULAR THIS WEEK</h3>
            {/** TODO: change card container to component */}
            <p>Nothing here yet</p>
          </div>
          <div className="page__section">
            <h3>YOU MIGHT ALSO LIKE</h3>
            {/** TODO: change card container to component */}
            <p>Nothing here yet</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
