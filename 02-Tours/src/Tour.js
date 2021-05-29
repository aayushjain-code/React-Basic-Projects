import React, { useState } from 'react';

//passing the props and destructuring them {} --09
const Tour = ({ id, image, info, price, name, removeTours }) => {
  //initializing the readmode function by creating a useState function and initiallly setting it false--11
  const [readMore, setReadMore] = useState(false);
  //populating the data from the props recived from parent into the component--10
  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      {/* if readmore is set false rendering whole string : otherwise cut string into 200 characters--12*/}
      <p>{readMore ? info : `${info.substring(0, 200)}...`}
        {/* onclick TOGGLE when we click setReadmore makes state falsey and hence initially  its cutting string and now it is not  */}
        {/* !setReadMore = falsey falsey----13 */}
        <button onClick={() => setReadMore(!readMore)}>
          {/* when readMore state is false it renders show leass vice versa---14 */}
          {readMore ? 'show less' : 'read more'}

        </button>
      </p>
      {/* deleting items with the help of prop drilled function removeTours--20 */}
      <button className="delete-btn" onClick={() => removeTours(id)}>not intrested</button>
    </footer>
  </article>;
};

export default Tour;
