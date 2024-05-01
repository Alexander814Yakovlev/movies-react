import { Component } from "react";
import MovieCard from "./MovieCard";
import "./MoviesList.css"

class MoviesList extends Component {
    render() {
        const {movies} = this.props
        return (
            movies.length ?
            <div className="movies__list">
                {movies.map(film => <MovieCard
                key={film.id}
                id={film.id}
                title={film.title || film.name}
                image={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}`: null}
                year={film.release_date ? film.release_date.split("-")[0] : film.first_air_date ? film.first_air_date.split("-")[0] : ''}
                genres={film.genre_ids ? this.props.genres.filter(x => film.genre_ids.includes(x.id)) : []}
                type={film.media_type}
                rating={film.vote_average}
                description={film.overview}
                />)}
            </div>
            : <div className="not_found">Ничего не нашлось...</div>
        )
    }
}

export default MoviesList