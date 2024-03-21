import AllAnime from "./AllAnime";
import DroppedAnime from "./DroppedAnime";
import PlannedAnime from "./PlannedAnime";
import StalledAnime from "./StalledAnime";
import WatchedAnime from "./WatchedAnime";
import WatchingAnime from "./WatchingAnime";

function ListAnime({
  listName,
  userId,
}: {
  listName: EAnimeCategoryOption;
  userId: string;
}) {
  switch (listName) {
    case "all":
      return <AllAnime userId={userId} />;
    case "watched":
      return <WatchedAnime userId={userId} />;
    case "watching":
      return <WatchingAnime userId={userId} />;
    case "planned":
      return <PlannedAnime userId={userId} />;
    case "stalled":
      return <StalledAnime userId={userId} />;
    case "dropped":
      return <DroppedAnime userId={userId} />;
  }
}

export default ListAnime;
