import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query {
    getAllAnime {
      id
      title
      picture
    }
  }
`;

export const GET_ONE_ANIME = gql`
  query getAnime($id: ID) {
    getAnime(id: $id) {
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
