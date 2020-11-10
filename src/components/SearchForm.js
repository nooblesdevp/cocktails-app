import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className="d-flex">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search cocktail"
          className="searchForm-input"
          ref={searchValue}
          id="name"
          onChange={searchCocktail}
        />
      </form>
    </div>
  );
}

export default SearchForm;
