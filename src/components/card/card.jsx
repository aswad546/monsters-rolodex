import React from 'react';
import './card.styles.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  

  render() {
    return (
      <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${this.props.id}/set=set2&size=180x180`}
      />
      <h2> {this.props.name} </h2>
      <p> {this.props.email} </p>
    </div>
    )
  }
}





// export const Card = props => (
//   <div className='card-container'>
//     <img
//       alt='monster'
//       src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
//     />
//     <h2> {props.monster.name} </h2>
//     <p> {props.monster.email} </p>
//   </div>
// );

export default Card;