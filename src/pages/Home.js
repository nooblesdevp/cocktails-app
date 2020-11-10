import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <div className="home container bgColor4">
      <SearchForm />
      <CocktailList />
    </div>
  );
}

export default Home;
