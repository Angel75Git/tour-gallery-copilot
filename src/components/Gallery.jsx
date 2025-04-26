import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, onRemoveTour }) => {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour
          id={tour.id} // Pass the tour ID as a prop
          name={tour.name} // Pass the tour name as a prop
          info={tour.info} // Pass the tour info as a prop
          image={tour.image} // Pass the tour image URL as a prop
          price={tour.price} // Pass the tour price as a prop
          onRemove={onRemoveTour} // Pass the remove function as a prop
        />
      ))}
    </div>
  );
};

export default Gallery;