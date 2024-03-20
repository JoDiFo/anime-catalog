// export const GET_ONE_ANIME_WITH_USER_ID = `
// select
// ANIMES.ID,
// ANIMES.TITLE,
// ANIMES.TYPE,
// ANIMES.EPISODES,
// ANIMES.YEAR,
// ANIMES.IMAGE_URL,
// ANIMES.STATUS,
// USER_CATEGORY.CATEGORY as watch_status,
// tags."name"
// from
// ANIMES
// join USER_CATEGORY on
// ANIMES.ID = USER_CATEGORY.ANIME_ID
// join anime_tag on
// anime_tag.anime_id = animes.id
// join tags on
// tags.id = anime_tag.tag_id
// where
// USER_CATEGORY.ANIME_ID = $1
// and USER_CATEGORY.USER_ID = $2
// `;

export const GET_ONE_ANIME_WITHOUT_USER_ID = `
select
	*
from
	ANIMES
join anime_tag
		using (anime_id)
join tags
		using (tag_id)
where
	ANIMES.anime_id = $1
`;

export const GET_ALL_TAGS = `
SELECT * FROM TAGS
`;

export const GET_ANIME_WATCH_STATUS = `
select
	user_category.category
from
	user_category
join animes
		using (anime_id)
where
	ANIMES.anime_id = $1
	and
user_category.user_id = $2
`;

export const GET_ALL_ANIME = `
select
	animes.anime_id,
	animes.title,
	animes."type" ,
	animes.episodes, 
	animes."year" ,
	animes.image_url, 
	animes.status ,
	array_agg(tags.name) as names
from
	ANIMES
join anime_tag
		using (anime_id)
join tags
		using (tag_id)
where lower( animes.title ) like lower($1)
group by
	animes.anime_id,
	animes.title,
	animes."type" ,
	animes.episodes, 
	animes."year" ,
	animes.image_url, 
	animes.status 
order by
	anime_id
`;

export const FIND_USER_BY_EMAIL = `
select
	*
from
	users
where
	users.email = $1
`;

export const UPDATE_USER_TOKEN = `
update
	users
set
	"token" = $1
where
	users.user_id = $2
`;

export const VALIDATE_USER_TOKEN = `
select
	*
from
	users
where
	users."token" = $1
`;
export const REGISTER_USER = `
insert
	into
	users (username,
	email,
	"password",
	register_date,
	image_url,
	"token")
values ($1, $2, $3, $4, '', $5)
returning *
`;

export const INSERT_INTO_CATEGORY = `
insert
	into
	user_category (user_id,
	anime_id,
	category)
values ($1, $2, $3)
returning *
`

export const REMOVE_FROM_CATEGORIES = `
delete
from
	user_category
where
	user_id = $1
	and anime_id = $2
`