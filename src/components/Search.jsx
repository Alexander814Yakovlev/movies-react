import { Component } from "react";
import "./Search.css"

class Search extends Component {
    state = {
        search: '',
        type: 'multi',
    }
    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                                this.props.searchMovies(this.state.search, this.state.type)
                            }
                        }
                        }
                    />
                    <button
                        className="btn-floating"
                        onClick={(e) => this.props.searchMovies(this.state.search, this.state.type)}
                    >
                        <i className="material-icons">search</i>
                    </button>
                    <div className="radio">
                    <label className="radio-label">
                        <input className="with-gap"
                                name="type"
                                type="radio"
                                onChange={(e) => this.setState({type: 'multi'})}
                                checked={this.state.type === 'multi'}
                        />
                        <span>All</span>
                    </label>
                    <label className="radio-label">
                        <input className="with-gap"
                                name="type"
                                type="radio"
                                onChange={(e) => this.setState({type: 'movie'})}
                                checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label className="radio-label">
                        <input className="with-gap"
                                name="type"
                                type="radio"
                                onChange={(e) => this.setState({type: 'tv'})}
                                checked={this.state.type === 'tv'}
                                />
                        <span>Series</span>
                    </label>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Search