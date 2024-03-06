import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query getAllAnime($userId: ID) {
    getAllAnime(userId: $userId) {
      _id
      title
      picture
      tags
      watchStatus
    }
  }
`;

export const GET_ONE_ANIME = gql`
  query getOneAnime($id: ID, $userId: ID) {
    getOneAnime(id: $id, userId: $userId) {
      title
      type
      episodes
      status
      animeSeason {
        year
      }
      picture
      tags
      watchStatus
    }
  }
`;
