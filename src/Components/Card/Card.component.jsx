import React from "react";
import "./Card.styles.css";

const Card = props => (
  <div className="card-container">
    <div className="img-flip">
      <div className="img-front">
        <img
          alt={props.hero.name}
          src={require(`../../Img/${props.hero.order}.jpg`)}
        />
      </div>
      <div className="img-back">
        <img
          alt={props.hero.name}
          src={require(`../../Img/${props.hero.order}.jpg`)}
        />
      </div>
    </div>
  </div>
);

export default Card;
