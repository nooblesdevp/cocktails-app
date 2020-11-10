import React from "react";
import { Col, Row } from "react-bootstrap";

function Cocktail({ name, image, id, info, glass }) {
  return (
    <div className="cocktail bgColor3 d-flex mb-2 ">
      <Row>
        <Col xs={4} md={4}>
          <img className="img-fluid rounded " src={image} alt={name} />
        </Col>
        <div className="cocktail-info p-1">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <h5>{info}</h5>
        </div>
      </Row>
    </div>
  );
}

export default Cocktail;
