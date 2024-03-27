import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      isValid
      id
      username
      registerDate
      imageUrl
      refreshToken
      accessToken
    }
  }
`;

export const LOGIN_USER = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      isValid
      id
      username
      registerDate
      imageUrl
      refreshToken
      accessToken
    }
  }
`;

export const VALIDATE_USER = gql`
  query validateUser($token: String!) {
    validateUser(token: $token)
  }
`;

export const GET_ANIME_COUNT = gql`
  query getAnimeCount($userId: ID!) {
    getAnimeCount(userId: $userId) {
      watched
      watching
      planned
      stalled
      dropped
    }
  }
`;

export const ADD_ANIME = gql`
  mutation addAnime($userId: ID!, $animeId: ID!, $category: String!) {
    addAnime(userId: $userId, animeId: $animeId, category: $category)
  }
`;

export const REMOVE_ANIME = gql`
  mutation removeAnime($userId: ID!, $animeId: ID!) {
    removeAnime(userId: $userId, animeId: $animeId)
  }
`;

export const GET_ALL_USER_ANIME = gql`
  query getAllUserAnime($userId: ID!) {
    getAllUserAnime(userId: $userId) {
      id
      title
      imageUrl
      watchStatus
    }
  }
`;

export const GET_USER_ANIME = gql`
  query getUserAnime($userId: ID!, $category: String!) {
    getUserAnime(userId: $userId, category: $category) {
      id
      title
      imageUrl
      watchStatus
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($userId: ID!, $imageUrl: String!) {
    uploadImage(userId: $userId, imageUrl: $imageUrl)
  }
`;
