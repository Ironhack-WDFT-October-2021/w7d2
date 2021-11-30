import React from 'react'

export const MovieCard = (props) => {
	return (
		<div>
			<h2>{props.movie.title}</h2>
			<p>{props.movie.director}</p>
			{/* if statement in react */}
			{props.movie.IMDBRating > 9.1 && <p>{props.movie.IMDBRating}</p>}
			{props.movie.hasOscars ? <p>Oscar winner 🤩</p> : <p>No Oscar 🙀</p>}
		</div>
	)
}
