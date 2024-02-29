import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query {
    getAllAnime {
      _id
      title
      picture
      tags
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
