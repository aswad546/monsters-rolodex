import React from "react";
import "./card.styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
