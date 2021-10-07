import React from 'react';
import Tour from './Tour';
const Tours = ({ tours,removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className = 'ubderline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key = {tour.id} {...tour} removeTour = {removeTour}></Tour>; 
          // removeTour prop equal to a removeTour function 
        })}
      </div>
    </section>
  )
};

export default Tours;
