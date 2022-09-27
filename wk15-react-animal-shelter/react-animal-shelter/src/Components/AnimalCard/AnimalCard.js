import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Card } from "react-bootstrap";
// This is important - to import style and use inline style to assign a unique class name to each prop
// as indivudal prop got individual style - might use same class name
// then use className={style['classname']} - in html, the classname will be appended
import styles from "./AnimalCard.module.scss";
import { Link } from "react-router-dom";

function AnimalCard(props) {
  const { _id, name, adopted, species, sex, image } = props.data;
  const displayView = props.showViewButton ? true : false;

  return (
    // Need key here, if not the entire list will be re-rendered
    // With key, you only re-render that element if changed
    // <Link to={`/animals/${_id}`} className={styles["card-container"]}>
    <Card style={{ width: "18rem" }}>
      <Card.Img className={styles["img"]} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{String(adopted)}</Card.Text>
        <Card.Text>{sex}</Card.Text>
        <Card.Text>{species}</Card.Text>
      </Card.Body>
      <Card.Body>
        {displayView ? (
          <>
            <Link to={`/animals/${_id}`} className="card-link">
              View Animal
            </Link>
            <br />
          </>
        ) : (
          ""
        )}
        <Link to={`/animals/${_id}/edit`} className="card-link">
          EDIT
        </Link>
        <Card.Link>DELETE</Card.Link>
        <Card.Link>ADOPT</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;
