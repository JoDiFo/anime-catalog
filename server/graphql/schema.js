import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Anime {
        _id: ID
        title: String
        type: String
        episodes: Int
        status: String
        animeSeason: AnimeSeason
        picture: String
        tags: [String]
    }

    type AnimeSeason {
        season: String
        year: Int
    }

    type Tag {
        _id: ID
        value: String
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
    }

    input UserInput {
        username: String
        email: String
        password: String
        watched: [String]
        watching: [String]
        planToWatch: [String]
        stalled: [String]
        dropped: [String]
    }

    type Query {
        getAllAnime: [Anime]
        getOneAnime(id: ID): Anime
        getAllTags: [Tag]
        getUser(id: ID): User
        loginUser(email: String, password: String): User
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID, input: UserInput): User
    }
`);
