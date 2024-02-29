import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Anime {
        id: ID
        title: String
        type: String
        episodes: Int
        status: String
        animeSeason: AnimeSeason
        picture: String
        synonyms: [String]
        tags: [String]
    }

    type AnimeSeason {
        season: String
        year: Int
    }

    type Tag {
        id: ID
        value: String
    }

    type Query {
        getAllAnime: [Anime]
        getAnime(id: ID): Anime
        getAllTags: [Tag]
    }
`);