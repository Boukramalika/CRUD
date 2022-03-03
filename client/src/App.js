import "./App.css";
import React from "react";


function App() {
  return(
    <div className="App">
      <h1>Crud Aplication</h1>

      <div className="form">
        <label>Movie Name</label>
        <input type="text"  name="movieName"></input>
        <label>Review</label>
        <input type="text"  name="review"></input>
        <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default App;
