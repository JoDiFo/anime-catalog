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
      token
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
      token
    }
  }
`;

export const VALIDATE_USER = gql`
  query validateUser($token: String!) {
    validateUser(token: $token) {
      isValid
      id
      username
      registerDate
      imageUrl
      token
    }
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

// TODO rename
export const GET_ALL = gql`
  query getUserAnime($userId: ID!) {
    getUserAnime(userId: $userId) {
      id
      title
      imageUrl
      watchStatus
    }
  }
`;

export const GET_WATCHED = gql`
  query getUserWatched($userId: ID!) {
    getUserWatched(userId: $userId) {
      id
      title
      imageUrl
    }
  }
`;

export const GET_WATCHING = gql`
  query getUserWatching($userId: ID!) {
    getUserWatching(userId: $userId) {
      id
      title
      imageUrl
    }
  }
`;

export const GET_PLANNED = gql`
  query getUserPlanning($userId: ID!) {
    getUserPlanning(userId: $userId) {
      id
      title
      imageUrl
    }
  }
`;

export const GET_STALLED = gql`
  query getUserStalled($userId: ID!) {
    getUserStalled(userId: $userId) {
      id
      title
      imageUrl
    }
  }
`;

export const GET_DROPPED = gql`
  query getUserDropped($userId: ID!) {
    getUserDropped(userId: $userId) {
      id
      title
      imageUrl
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($userId: ID!, $imageUrl: String!) {
    uploadImage(userId: $userId, imageUrl: $imageUrl)
  }
`;
