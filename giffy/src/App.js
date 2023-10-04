import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/ecuador">Gifs de Ecuador </Link>
        <Link to="/gif/colombia">Gifs de Colombia</Link>
        <Link to="/gif/satoru">Gifs de Satoru</Link>

        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
