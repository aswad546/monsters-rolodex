import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => ( //directly destructuring in the params
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
