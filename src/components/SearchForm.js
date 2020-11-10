import React from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div className="d-flex">
      <input
        type="text"
        placeholder="search cocktail"
        className="searchForm-input"
      />
    </div>
  );
}

export default SearchForm;
