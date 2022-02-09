// src/POPOSSpace.js
import './POPOSSpace';

function POPOSSpace({ name, image, address, hours }) {
  return (
    <div className='POPOSSpace'>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
        width="300" 
        height="300" 
        alt="Hello" 
      />
      <h1>{name}</h1>
      <div>{address}</div>
      <p><em>{hours}</em></p>
    </div>
  )
};

export default POPOSSpace;
