import React from "react";

function Cocktail({ name, image, id, info, glass }) {
  return (
    <div className="cocktail">
      <img src={image} alt={name} />
      <div className="cocktail-info">
        <h3>{name}</h3>
        <h4>{glass}</h4>
      </div>
    </div>
  );
}

export default Cocktail;
