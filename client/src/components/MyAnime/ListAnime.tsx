import AllAnime from "./AllAnime";
import CategorizedAnime from "./CategorizedAnime";

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
    case "watching":
    case "planned":
    case "stalled":
    case "dropped":
      return <CategorizedAnime userId={userId} category={listName} />;
  }
}

export default ListAnime;
