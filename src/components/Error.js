import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1>opps! it's a dead end</h1>
        <Link to="/">back home</Link>
      </div>
      <h1>error</h1>
    </div>
  );
}

export default Error;
