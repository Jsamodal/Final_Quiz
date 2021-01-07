import React from 'react';


const AuctionDetails = ({ title, first_name, body, amount, created_at, updated_at }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{body}</h4>
      <p>Current Bid: ${amount}</p>
      <p>
        <small>Created {created_at.toLocaleString()}</small>*
        <small>Last edited {updated_at.toLocaleString()}</small>
      </p>
    </div>
  );
};

export default AuctionDetails;
