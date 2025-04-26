import React from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default TourCard;