// src/POPOSSpace.js
import './POPOSSpace';
import { Link } from 'react-router-dom';

function POPOSSpace({ name, image, address, hours, id }) {
  return (
    <div className='POPOSSpace'>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
        width="300" 
        height="300" 
        alt="Hello" 
        />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>{address}</div>
      <p><em>{hours}</em></p>
    </div>
  )
};

export default POPOSSpace;
