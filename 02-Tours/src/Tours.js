import React from 'react';
import Tour from './Tour';

//getting the props and destructuring it{tours}--07
//getting the props and destructuring it{removeTours}--18
const Tours = ({ tours, removeTours }) => {

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* passing the destuctured props into map and with id as refrence ...tours=spread operator to initiate the values--08 */}
        {tours.map((tour) => {
          {/* passing the props via tours into child components here into Tours component --(19) */ }
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />
        })}
      </div>
    </section>
  )
};

export default Tours;
