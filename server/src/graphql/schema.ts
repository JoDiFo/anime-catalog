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
        watchStatus: String
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

    type AnimeCount {
        watched: Int
        watching: Int
        planToWatch: Int
        stalled: Int
        dropped: Int
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
        getAllAnime(userId: ID): [Anime]
        getOneAnime(id: ID): Anime
        getAllTags: [Tag]
        getUser(id: ID): User
        loginUser(email: String, password: String): User
        getAnimeCount(userId: ID): AnimeCount
        getUserAnime(userId: ID): [Anime]
        getUserWatched(userId: ID): [Anime]
        getUserWatching(userId: ID): [Anime]
        getUserPlanning(userId: ID): [Anime]
        getUserStalled(userId: ID): [Anime]
        getUserDropped(userId: ID): [Anime]
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID, input: UserInput): User
        addAnime(userId: ID, animeId: ID, category: String): Anime
    }
`);
