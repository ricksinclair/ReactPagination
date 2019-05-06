import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: [
      {
        title: "Die Hard",
        genre: "Action",
        stock: 10,
        rate: 5
      },
      {
        title: "Avengers: Infinity War",
        genre: "Action",
        stock: 15,
        rate: 8
      },
      {
        title: "The Notebook",
        genre: "Romance",
        stock: 12,
        rate: 5
      },
      {
        title: "The Lion King",
        genre: "Family",
        stock: 13,
        rate: 5
      },
      {
        title: "Avatar",
        genre: "Sci-Fi",
        stock: 10,
        rate: 5
      },
      {
        title: "Creed",
        genre: "Sports Drama",
        stock: 14,
        rate: 5
      }
    ]
  };

  render() {
    let { movies } = this.state;
    return (
      <div>
        {/* building fictional movie rental component for a warmup */}
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
                <tr>
                  <td>{title}</td>
                  <td>{genre}</td>
                  <td>{stock}</td>
                  <td>{rate}</td>
                </tr>
              );
            })}
          </tbody>{" "}
        </table>
      </div>
    );
  }
}

export default Movies;
