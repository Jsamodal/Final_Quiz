import React from 'react';
import BidDetails from './BidDetails';

const BidList = (props) => {
    console.log(props)
  const bids = props.bids;
  return(
    <ul>
      {
        bids ? 
       bids.map( bid => {
        return (
          <li key={bid.id}>
            <BidDetails 
                id={bid.id}
                bid={bid.bid}
              author={bid.author}
              created_at={bid.created_at}
              onBidDeleteClick={props.onBidDeleteClick}
            />
          </li>
        )
      })
      :null
    }
    </ul>
  )
}

export default BidList;