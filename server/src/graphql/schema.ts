import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Anime {
        id: ID
        title: String
        type: String
        episodes: Int
        status: String
        year: Int
        imageUrl: String
        tags: [String]
        watchStatus: String
    }

    type Tag {
        id: ID
        value: String
    }

    type User {
        id: ID
        username: String
        registerDate: String
        email: String
        password: String
        watched: [String]
        watching: [String]
        planned: [String]
        stalled: [String]
        dropped: [String]
        token: String
        imageUrl: String
    }

    type AnimeCount {
        watched: Int
        watching: Int
        planned: Int
        stalled: Int
        dropped: Int
    }

    type UserLoginData {
        isValid: Boolean
        id: ID
        username: String
        registerDate: String
        imageUrl: String
        refreshToken: String
        accessToken: String
    }

    type Query {
        getAllAnime(userId: ID, searchString: String, tags: [String], sortBy: String!): [Anime]
        getOneAnime(animeId: ID!, userId: ID): Anime
        getAllTags: [Tag]
        validateUser(token: String!): String
        loginUser(email: String!, password: String!): UserLoginData
        getAnimeCount(userId: ID!): AnimeCount
        getAllUserAnime(userId: ID!): [Anime]
        getUserAnime(userId: ID!, category: String!): [Anime]
    }

    type Mutation {
        registerUser(username: String!, email: String!, password: String!): UserLoginData
        addAnime(userId: ID!, animeId: ID!, category: String!): Boolean
        removeAnime(userId: ID!, animeId: ID!): Boolean
        uploadImage(userId: ID!, imageUrl: String!): Boolean
    }
`);
