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

    type Query {
        getAllAnime: [Anime]
        getAnime(id: ID): Anime
        getAllTags: [Tag]
    }
`);
