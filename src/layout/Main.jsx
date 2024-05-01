import { Component } from "react";
import './Main.css'
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    state = {
        loading: true,
        movies : [],
        genres: [],
    }

    getGenres = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWRmZTVhNjE0YzJmNmVhNjM1NmJmODY2MzE0ZTQ2NSIsInN1YiI6IjY1M2UwZDViYzhhNWFjMDBjNmQ3MTI0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n8Hg8okwVx4_ev1cpDaJOJQ0jgAZ6-MBnkdTQdwjwyc'
            }
          };
          
          fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
            .then(response => response.json())
            .then(response => this.setState({genres: response.genres}))
    }

    searchMovies = (query, type='multi') => {
      this.setState({loading: true})
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_KEY}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=ru-RU&page=1`, options)
            .then(response => response.json())
            .then(data => this.setState({movies: data.results, loading: false}))
    }

    getTrendings = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_KEY}`
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/movie/day?language=ru-RU', options)
            .then(response => response.json())
            .then(response => this.setState({movies: response.results, loading: false}))
    }

    componentDidMount = () => {
        this.getTrendings()
        this.getGenres()
    }

    render() {
        const {movies, genres, loading} = this.state
        const preloader = (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {
                    !loading ? <MoviesList movies={movies} genres={genres}/> : preloader
                }
            </main>
        )
    }
}

export default Main