import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, onRemoveTour }) => {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemoveTour}
        />
      ))}
    </div>
  );
};

export default Gallery;