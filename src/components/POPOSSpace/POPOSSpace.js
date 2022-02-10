// src/POPOSSpace.js
import './POPOSSpace.css';
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
        <Link 
          className='POPOSSpace-title'
          to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className='POPOSSpace-info'>
        <div>{address}</div>
        <div><em>{hours}</em></div>
      </div>
    </div>
  )
};

export default POPOSSpace;
