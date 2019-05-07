import React, { Component } from "react";
import { returnMovies } from "../services/fakemovieservice";

export default class Movies extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    this.setState({
      movies: returnMovies()
    });
  }

  deleteMovie = () => {
    console.log("delete pressed");
  };
  render() {
    let { movies } = this.state;

    return (
      <div>
        {/* 
        
        Building fictional movie rental component for a warmup 
        
        API Documentation here: https://developers.themoviedb.org/3/search/search-movies
        
        
        */}
        <h2 className="display-3 mt-4 text-center">Movies Component</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              let { genre, rate, stock, title } = movie;
              return (
                <tr key={title}>
                  <td>{title}</td>
                  <td>{genre}</td>
                  <td>{stock}</td>
                  <td>{rate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={this.deleteMovie}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
