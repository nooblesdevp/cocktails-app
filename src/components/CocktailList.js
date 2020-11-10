import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";
import { SemipolarLoading } from "react-loadingg";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <SemipolarLoading />;
  }
  if (cocktails.length < 1) {
    return <h2>no cocktails matched your search criteria</h2>;
  }
  return (
    <div className="cocktails">
      <h2>cocktails</h2>
      <div className="cocktails-info">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default CocktailList;
