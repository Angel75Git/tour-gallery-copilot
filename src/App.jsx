import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  // State to handle any errors during data fetching
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      // Fetch data from the API
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw an error if the response is not OK
      }
      const data = await response.json(); // Parse the JSON response
      setTours(data); // Update the tours state with the fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set the error message if an error occurs
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given ID
  };

  // Render loading message if loading is true
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render error message if an error exists
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Render a "No Tours Left" message and a refresh button if no tours are left
  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  // Render the Gallery component with the tours data and removeTour function
  return (
    <div>
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemoveTour={removeTour} />
    </div>
  );
};

export default App;