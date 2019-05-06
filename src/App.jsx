import React from "react";
import "./App.css";
import Movies from "./components/movies";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Movies />
      </div>
    </div>
  );
}

export default App;
