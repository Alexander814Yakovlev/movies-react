import { Component } from "react";
import "./MovieCard.css";

class MovieCard extends Component {
  render() {
    let { title, image, id, genres, year, type, rating, description } =
      this.props;
    return (
      <div className="card z-depth-4" id={id} key={id}>
        <div className="card-image">
          <img
            src={
              image !== null
                ? image
                : `https://placehold.co/400x600?text=${title}`
            }
            alt={title}
          />
          <div className="description">{description}</div>
        </div>
        <div className="card-content">
          <h6 className="card-title">{title}</h6>
          <div className="card-genres">
            {genres.map((x) => (
              <p className="genre">{x.name}</p>
            ))}
          </div>
          <div className="card__info">
            <p className="rating">
              <span className="material-icons">star</span>
              <span>{rating}</span>
            </p>
            <p>{year}</p>
            <p>{type}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
