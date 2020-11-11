import React from "react";
import CocktailList from "../components/CocktailList";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <div className=" container bgColor4">
      <div className="home">
        <SearchForm />
        <CocktailList />
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
