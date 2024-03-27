export const GET_ONE_ANIME_WITHOUT_USER_ID = `
select
	*
from
	anime
join anime_tag
		using (anime_id)
join tags
		using (tag_id)
where
	anime.anime_id = $1
`;

export const GET_ALL_TAGS = `
select * from tags
`;

export const GET_ANIME_WATCH_STATUS = `
select
	user_category.category
from
	user_category
join anime
		using (anime_id)
where
	anime.anime_id = $1
	and
	user_category.user_id = $2
`;

export const GET_ALL_ANIME = (orderBy: string) => `
select
	anime.anime_id,
	anime.title,
	anime."type" ,
	anime.episodes, 
	anime."year" ,
	anime.image_url, 
	anime.status ,
	array_agg(tags.value) as values
from
	anime
join anime_tag
		using (anime_id)
join tags
		using (tag_id)
where lower( anime.title ) like lower($1)
group by
	anime.anime_id,
	anime.title,
	anime."type" ,
	anime.episodes, 
	anime."year" ,
	anime.image_url, 
	anime.status 
order by
	${orderBy} asc
`;

export const GET_ALL_ANIME_WITH_USER_ID = (orderBy: string) => `
with s_category as(
	select
		anime_id,
		category
	from
		user_category
	inner join anime
			using(anime_id)
	where
		user_id = $2
	)
	
	select
		anime.anime_id,
		anime.title,
		anime."type" ,
		anime.episodes, 
		anime."year" ,
		anime.image_url, 
		anime.status ,
		category,
		array_agg(tags.value) as
	values
	from
		anime
	join anime_tag
		using (anime_id)
	join tags
		using (tag_id)
	left join s_category
		using (anime_id)
	where lower(anime.title) like lower($1)
	group by
		anime.anime_id,
		anime.title,
		anime."type" ,
		anime.episodes, 
		anime."year" ,
		anime.image_url, 
		anime.status ,
		category
	order by
		${orderBy} asc
`;

export const FIND_USER_BY_EMAIL = `
select
	*
from
	users
where
	users.email = $1
`;

export const REGISTER_USER = `
insert
	into
	users (username,
	email,
	"password",
	register_date,
	image_url)
values ($1, $2, $3, $4, '')
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
`;

export const REMOVE_FROM_CATEGORIES = `
delete
from
	user_category
where
	user_id = $1
	and anime_id = $2
`;

export const GET_ANIME_COUNT = `
select
	count(anime_id),
	category
from
	user_category
where
	user_id = $1
group by
	category
`;

export const GET_ALL_ANIME_WITH_CATEGORY_USER = `
select
	anime.anime_id,
	anime.title,
	anime."type" ,
	anime.episodes, 
	anime."year" ,
	anime.image_url, 
	anime.status ,
	array_agg(tags.value) as values,
	user_category.category 
from
	anime
join anime_tag
	using (anime_id)
join tags
	using (tag_id)
join user_category
	using (anime_id)
where user_category.user_id = $1
	and user_category.category = $2
group by
	anime.anime_id,
	anime.title,
	anime."type" ,
	anime.episodes, 
	anime."year" ,
	anime.image_url, 
	anime.status,
	user_category.category 
order by
	anime_id
`;

export const GET_ALL_ANIME_WITHOUT_USER = `
select
	anime.anime_id,
	anime.title,
	anime."type" ,
	anime.episodes, 
	anime."year" ,
	anime.image_url, 
	anime.status ,
	array_agg(tags.value) as values,
	user_category.category 
from
	anime
join anime_tag
	using (anime_id)
join tags
	using (tag_id)
join user_category
	using (anime_id)
where user_category.user_id = $1
group by
	anime.anime_id,
	anime.title,
	anime."type" ,
	anime.episodes, 
	anime."year" ,
	anime.image_url, 
	anime.status,
	user_category.category 
order by
	anime_id
`;

export const UPLOAD_IMAGE = `
update
	users
set
	image_url = $1
where
	user_id = $2
`;
