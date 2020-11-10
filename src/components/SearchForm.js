import React from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div>
      <input type="text" placeholder="search cocktail" />
    </div>
  );
}

export default SearchForm;
