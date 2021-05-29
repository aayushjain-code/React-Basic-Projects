import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  //seting up the states--(01)
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  //creating a function to remove items from list by padding id into it--15
  const removeTours = (id) => {
    //filtering tours and putting all elements without specific id in array and making it into setTours--16
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }


  //fetching data from api using asnc-await and try-catch
  //plus setting calling set loading true and on success making it false--(04)
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      // console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    // console.log(tours);
  }

  //after fetching data calling useEffect once[],
  //inside use effect calling fetched data function--(05)
  useEffect(() => {
    fetchTours();
  }, [])


  //creating loading if loading is true return loading components--(02)
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }

  //setting up the basic component for returning --(03)
  return (
    <main>
      {/* passing the props via tours into child components here into Tours component --(06) */}
      {/* passing the props via tours into child components here into Tours component --(17) */}

      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
