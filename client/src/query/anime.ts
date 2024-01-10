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
