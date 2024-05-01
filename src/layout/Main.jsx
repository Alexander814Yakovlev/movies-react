import { Component } from "react";
import './Main.css'
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    state = {
        loading: true,
        movies : [],
        genres: [],
        pages: 1,
        currentPage: 1,
        search: '',
        type: '',
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

    searchMovies = (query, type='multi', page=1) => {
      this.setState({loading: true})
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_KEY}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=ru-RU&page=${page}`, options)
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.results,
                loading: false,
                pages: data.total_pages,
                search: query,
                type: type,
                currentPage: page,
              }))
    }

    getTrendings = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_KEY}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/trending/movie/day?language=ru-RU%`, options)
            .then(response => response.json())
            .then(response => this.setState({movies: response.results, loading: false, pages: response.total_pages}))
    }

    componentDidMount = () => {
        this.getTrendings()
        this.getGenres()
    }

    render() {
        const {movies, genres, loading, pages, currentPage, search, type} = this.state
        const preloader = (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
        return (
            <main className="container content">
                <Search key="search"
                        searchMovies={this.searchMovies}/>
                {
                    !loading ? <MoviesList key="movies" movies={movies} genres={genres} search={search}/> : preloader
                }
                <Pagination
                  key="pagination"
                  searchMovies={this.searchMovies}
                  pages={pages}
                  currentPage={currentPage}
                  search={search}
                  type={type}
                />
            </main>
        )
    }
}

export default Main