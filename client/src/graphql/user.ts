import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      _id
      username
      registerDate
      token
      imageUrl
    }
  }
`;

export const LOGIN_USER = gql`
  query loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      _id
      username
      registerDate
      token
      imageUrl
    }
  }
`;

export const VALIDATE_USER = gql`
  query validateUser($token: String) {
    validateUser(token: $token) {
      isValid
      _userId
      username
      registerDate
      imageUrl
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

export const GET_ALL = gql`
  query getUserAnime($userId: ID) {
    getUserAnime(userId: $userId) {
      _id
      title
      picture
      tags
    }
  }
`;

export const GET_WATCHED = gql`
  query getUserWatched($userId: ID) {
    getUserWatched(userId: $userId) {
      _id
      title
      picture
      tags
    }
  }
`;

export const GET_WATCHING = gql`
  query getUserWatching($userId: ID) {
    getUserWatching(userId: $userId) {
      _id
      title
      picture
      tags
    }
  }
`;

export const GET_PLANNED = gql`
  query getUserPlanning($userId: ID) {
    getUserPlanning(userId: $userId) {
      _id
      title
      picture
      tags
    }
  }
`;

export const GET_STALLED = gql`
  query getUserStalled($userId: ID) {
    getUserStalled(userId: $userId) {
      _id
      title
      picture
      tags
    }
  }
`;

export const GET_DROPPED = gql`
  query getUserDropped($userId: ID) {
    getUserDropped(userId: $userId) {
      _id
      title
      picture
      tags
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($userId: ID, $imageUrl: String) {
    uploadImage(userId: $userId, imageUrl: $imageUrl)
  }
`;
