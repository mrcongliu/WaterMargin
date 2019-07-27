import React from "react";
import Card from "../Card/Card.component";
import "./Card-List.styles.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.heroes.map(hero => (
        <Card key={hero.order} hero={hero} />
      ))}
    </div>
  );
};
