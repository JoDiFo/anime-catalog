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
  query getOneAnime($id: ID) {
    getOneAnime(id: $id) {
      title
      type
      episodes
      status
      animeSeason {
        year
      }
      picture
      tags
    }
  }
`;
