import React from 'react';
import './InfoCards.css'

type CardProps = {
  title: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed';
};

const Card: React.FC<CardProps> = ({ title, description, status }) => {
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