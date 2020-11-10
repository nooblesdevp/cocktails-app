import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
