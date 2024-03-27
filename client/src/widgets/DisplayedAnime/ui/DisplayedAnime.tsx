import { AllAnime } from "@/widgets/AllAnime";
import { CategorizedAnime } from "@/widgets/CategorizedAnime";

interface DisplayedAnimeProps {
  listName: EAnimeCategoryOption;
  userId: string;
}

export function DisplayedAnime({ listName, userId }: DisplayedAnimeProps) {
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
