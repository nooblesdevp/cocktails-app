import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Table } from "react-bootstrap";
import SemipolarLoading from "react-loadingg/lib/SemipolarLoading";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Navbar from "../components/Navbar";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  console.log("cocktail", cocktail);

  useEffect(() => {
    setLoading(true);
    async function fetchCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        console.log("singleCocktail", data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    }
    fetchCocktail();
  }, [id]);

  if (loading) {
    return <SemipolarLoading />;
  }
  if (!cocktail) {
    return <Error />;
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;
  return (
    <div className="container bgColor4">
      <Card className="my-2 singleCocktail-card  ">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th></th>
                <th>Info</th>
                <th>Glass</th>
                <th>Categori</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{info}</td>
                <td>{glass}</td>
                <td>{category}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th></th>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>

                {ingredients.map((item, index) => {
                  return item ? <td key={index}>{item}</td> : null;
                })}
              </tr>
            </tbody>
          </Table>
        </ListGroup>
        <Card.Body>{instructions}</Card.Body>
      </Card>
      <Navbar />
    </div>
  );
}

export default SingleCocktail;
