import React from 'react'
import { MovieCard } from './MovieCard'

export const MoviesList = (props) => {
	return (
		<div>
			{/* {props.list.map(movie => (
				<h3 key={movie._id}>{movie.title}</h3>
			))} */}
			{props.list.map(movie => (
				<MovieCard key={movie._id} movie={movie} />
			))}
		</div>
	)
}
