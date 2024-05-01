import { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    const { pages, currentPage, search, type } = this.props;
    return search && pages > 1 ? (
      <ul className="pagination">
        <li
          className={currentPage === 1 ? "disabled" : "waves-effect"}
          onClick={() =>
            currentPage !== 1
              ? this.props.searchMovies(search, type, currentPage - 1)
              : null
          }
        >
          <i className="material-icons">chevron_left</i>
        </li>
        <li
          className={currentPage === 1 ? "active" : "waves-effect"}
          onClick={() => this.props.searchMovies(search, type, 1)}
        >
          1
        </li>
        <li
          className={
            currentPage > 1 && currentPage < pages ? "active" : "waves-effect"
          }
        >
          {currentPage > 1 && currentPage < pages
            ? currentPage
            : pages > 2
            ? "..."
            : ""}
        </li>
        <li
          className={currentPage === pages ? "active" : "waves-effect"}
          onClick={() => this.props.searchMovies(search, type, pages)}
        >
          {pages}
        </li>
        <li
          className={currentPage === pages ? "disabled" : "waves-effect"}
          onClick={() =>
            currentPage !== pages
              ? this.props.searchMovies(search, type, currentPage + 1)
              : null
          }
        >
          <i className="material-icons">chevron_right</i>
        </li>
      </ul>
    ) : (
      ""
    );
  }
}

export default Pagination;
