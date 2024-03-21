import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query getAllAnime($userId: ID, $searchString: String, $tags: [String]) {
    getAllAnime(userId: $userId, searchString: $searchString, tags: $tags) {
      id
      title
      imageUrl
      watchStatus
    }
  }
`;

export const GET_ONE_ANIME = gql`
  query getOneAnime($animeId: ID!, $userId: ID) {
    getOneAnime(animeId: $animeId, userId: $userId) {
      title
      type
      episodes
      status
      year
      imageUrl
      tags
      watchStatus
    }
  }
`;
