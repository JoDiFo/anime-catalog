import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      _id
      username
    }
  }
`;

export const LOGIN_USER = gql`
  query loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      _id
      username
    }
  }
`;