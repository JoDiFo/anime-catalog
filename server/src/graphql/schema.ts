import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Anime {
        id: ID
        title: String
        type: String
        episodes: Int
        status: String
        year: Int
        image_url: String
        tags: [String]
        watch_status: String
    }

    type Tag {
        id: ID
        name: String
    }

    type User {
        _id: ID
        username: String
        registerDate: String
        email: String
        password: String
        watched: [String]
        watching: [String]
        planToWatch: [String]
        stalled: [String]
        dropped: [String]
        token: String
        imageUrl: String
    }

    type AnimeCount {
        watched: Int
        watching: Int
        planToWatch: Int
        stalled: Int
        dropped: Int
    }

    type UserLoginData {
        isValid: Boolean
        id: ID
        username: String
        registerDate: String
        image_url: String
    }

    input UserInput {
        username: String
        email: String
        password: String
    }

    type Query {
        getAllAnime(userId: ID, searchString: String, tags: [String]): [Anime]
        getOneAnime(animeId: ID!, userId: ID): Anime
        getAllTags: [Tag]
        validateUser(token: String!): UserLoginData
        loginUser(email: String!, password: String!): UserLoginData
        getAnimeCount(userId: ID!): AnimeCount
        getUserAnime(userId: ID!): [Anime]
        getUserWatched(userId: ID!): [Anime]
        getUserWatching(userId: ID!): [Anime]
        getUserPlanning(userId: ID!): [Anime]
        getUserStalled(userId: ID!): [Anime]
        getUserDropped(userId: ID!): [Anime]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): UserLoginData
        updateUser(id: ID!, input: UserInput!): User
        addAnime(userId: ID!, animeId: ID!, category: String!): Anime
        removeAnime(userId: ID!, animeId: ID!): Boolean
        uploadImage(userId: ID!, imageUrl: String!): Boolean
    }
`);
