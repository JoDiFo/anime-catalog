export const GET_ONE_ANIME_WITH_USER_ID = `
    select
        ANIMES.ID,
        ANIMES.TITLE,
        ANIMES.TYPE,
        ANIMES.EPISODES,
        ANIMES.YEAR,
        ANIMES.IMAGE_URL,
        ANIMES.STATUS,
        USER_CATEGORY.CATEGORY as watch_status,
        tags."name"
    from
    ANIMES
    join USER_CATEGORY on
        ANIMES.ID = USER_CATEGORY.ANIME_ID
    join anime_tag on
        anime_tag.anime_id = animes.id
    join tags on
        tags.id = anime_tag.tag_id
    where
    USER_CATEGORY.ANIME_ID = $1
        and USER_CATEGORY.USER_ID = $2  
`;

export const GET_ONE_ANIME_WITHOUT_USER_ID = `
select
ANIMES.ID,
ANIMES.TITLE,
ANIMES.TYPE,
ANIMES.EPISODES,
ANIMES.YEAR,
ANIMES.IMAGE_URL,
ANIMES.STATUS,
tags.name
from
ANIMES
join anime_tag on
anime_tag.anime_id = animes.id
join tags on
tags.id = anime_tag.tag_id
where
ANIMES.ID = $1
`;

export const GET_ALL_TAGS = `
SELECT * FROM TAGS
`;
