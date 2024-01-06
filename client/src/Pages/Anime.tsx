import animeThumbnail from "../assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";

function Anime() {
  return (
    <main className="anime-page">
      <div className="container">
        <h1 className="anime-page__title">Full Metal Alchemist: Brotherhood</h1>
        <hr className="anime-page__line" />
        <div className="anime-page__content">
          <img
            className="anime-page__image image"
            src={animeThumbnail}
            alt="fullmetal-alchemist-brotherhood"
          />
          <div className="anime-page__info">
            <p className="anime-page__synopsis">
              This is just some dummy text to fill this text box so don’t mind
              it. Just assume that here should be a synopsis of this anime. Yah
              I know I still need to add more text to fill this stupid text box.
            </p>
            <div className="anime-page__tags">
              <h4 className="anime-page__tag-title">Tags:</h4>
              <div className="tag">#action</div>
              <div className="tag">#fantasy</div>
              <div className="tag">#comedy</div>
              <div className="tag">#romance</div>
              <div className="tag">#adventure</div>
              <div className="tag">#action</div>
            </div>
            <div className="anime-page__my-list">
              <h4 className="anime-page__my-list__title">MY ANIME:</h4>
              <div className="anime-page__select">
                <span className="dot not-watched"></span>
                <select
                  name="list-select"
                  id="list-select"
                  className="anime-page__my-list__dropdown"
                >
                  <option value="not-watched">not watched</option>
                  <option value="watched">watched</option>
                  <option value="watching">watching</option>
                  <option value="plan-to-watch">plan to watch</option>
                  <option value="stalled">stalled</option>
                  <option value="dropped">dropped</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Anime;
