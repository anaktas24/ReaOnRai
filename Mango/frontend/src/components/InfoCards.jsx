import React from 'react';
import './InfoCards.css'


const Card =()=>{
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <span className={`card-status ${status.toLowerCase()}`}>{status}</span>
      <button className="card-button" >
        Take Action
      </button>
    </div>
  );
};

export default Card;