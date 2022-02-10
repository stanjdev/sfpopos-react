// src/POPOSList.js
import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js';

function POPOSList() {
  const [ query, setQuery ] = useState('');
  const spaces = data
  .filter(({ title, address }) => 
    title.toLowerCase().includes(query.toLowerCase()) 
    || address.toLowerCase().includes(query.toLowerCase())
  )
  .map(({ title, address, images, hours, id }) => {
    return (
      <div >
        <POPOSSpace 
          id={id}
          key={`${title}-${id}`}
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
        />
      </div>
    )
  })

  return (
    <>
      <form>
        <input 
          value={query}
          placeholder="search"
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <button>search</button>
      </form>
      <div className="POPOSList">
        { spaces }
      </div>
    </>
  )
}

export default POPOSList
