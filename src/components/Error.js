import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Error() {
  return (
    <div className="error-page container bgColor3">
      {["Info"].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          className="error-page-card"
        >
          <Card.Header>Ops !</Card.Header>
          <Card.Body>
            <Card.Text>Page not found :(</Card.Text>
          </Card.Body>
        </Card>
      ))}

      <Navbar />
    </div>
  );
}

export default Error;
