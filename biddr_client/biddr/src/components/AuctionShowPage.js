import React, { Component } from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import { Auction } from '../requests';

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auction: {}
    }
    console.log(props.match.params.id);
    this.deleteBid = this.deleteBid.bind(this);
    console.log(props)
  }

  componentDidMount() {
    Auction.show(this.props.match.params.id)
      .then(auction => {
        console.log(auction);
        this.setState((state) => {
          return {
            auction: auction
          }
        })
      })
  }

  deleteBid(id) {
    this.setState(state => {
      return {
        auction: {
          ...state.auction,
          bids: state.auction.bids.filter(b => b.id !== id)
        }
      }
    })
  }

  render() {
    return (
      <main>
        <AuctionDetails
          title={ this.state.auction.title }
          body={ this.state.auction.body }
          author={ this.state.auction.author }
          amount={ this.state.auction.amount }
          created_at={new Date(this.state.auction.created_at)}
          updated_at={new Date(this.state.auction.updated_at)}
        />
        
        <h2>Bids:</h2>
        <BidList bids={this.state.auction.bids} onBidDeleteClick={this.deleteBid}/>
      </main>
     
    )
  }
}

export default AuctionShowPage;