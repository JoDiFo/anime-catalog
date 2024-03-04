import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      _id
      username
      registerDate
    }
  }
`;

export const LOGIN_USER = gql`
  query loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      _id
      username
      registerDate
    }
  }
`;

export const GET_ANIME_COUNT = gql`
  query getAnimeCount($userId: ID) {
    getAnimeCount(userId: $userId) {
      watched
      watching
      planToWatch
      stalled
      dropped
    }
  }
`;

export const ADD_ANIME = gql`
  mutation addAnime($userId: ID, $animeId: ID, $category: String) {
    addAnime(userId: $userId, animeId: $animeId, category: $category) {
      watchStatus
    }
  }
`;
