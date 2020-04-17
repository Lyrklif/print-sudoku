import React, { useState } from 'react';


const Area = () => {
  return (
    <div class="area" >
      <ul class="circles">

        {[...Array(10)].map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))}

      </ul>
    </div>
  )
};

export default Area;

