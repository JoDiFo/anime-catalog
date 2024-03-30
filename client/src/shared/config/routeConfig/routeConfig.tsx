import { RouteProps } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { SearchPage } from "@/pages/SearchPage";
import { LoginPage } from "@/pages/LoginPage";
import { UserAnime } from "@/pages/UserAnimePage";
import { AnimePage } from "@/pages/AnimePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  SEARCH = "search",
  PROFILE = "profile",
  USER_ANIME = "user_anime",
  ANIME = "anime",
  LOGIN = "login",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SEARCH]: "/search",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.USER_ANIME]: "/profile/anime",
  [AppRoutes.ANIME]: "/anime",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />,
  },
  [AppRoutes.SEARCH]: {
    path: RoutePath.search,
    element: <SearchPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.USER_ANIME]: {
    path: RoutePath.user_anime,
    element: <UserAnime />,
  },
  [AppRoutes.ANIME]: {
    path: RoutePath.anime,
    element: <AnimePage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
