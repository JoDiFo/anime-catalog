const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Anime {
        id: ID
        sources: [String]
        title: String
        type: String
        episodes: Int
        status: String
        animeSeason: AnimeSeason
        picture: String
        thumbnail: String
        synonyms: [String]
        relations: [String]
        tags: [String]
    }

    type AnimeSeason {
        season: String
        year: Int
    }

    type Query {
        getAllAnime: [Anime]
        getAnime(id: ID): Anime
    }
`)

module.exports = schema;
