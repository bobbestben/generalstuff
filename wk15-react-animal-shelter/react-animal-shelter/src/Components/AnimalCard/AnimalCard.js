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

    return (
        // Need key here, if not the entire list will be re-rendered
        // With key, you only re-render that element if changed
        <Link to={`/animals/${_id}`} className={styles["card-container"]}>
            <Card style={{ width: "18rem" }}>
                <Card.Img className={styles["img"]} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{String(adopted)}</p>
                        <p>{sex}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default AnimalCard;

// alternate JSX return
{
    /* <div>
                Card - {name}, {_id}, {species}, {sex}
            </div>
            <div className={styles["card-container"]}>
                <div className={styles["img-container"]}>
                    <img src={image} alt={name}></img>
                </div>
                <div className={styles["card-body"]}>
                    <p>{name}</p>
                    <p>{species}</p>
                    <p>{sex}</p>
                    <p>Adopted: {String(adopted)}</p>
                </div>
            </div> */
}
