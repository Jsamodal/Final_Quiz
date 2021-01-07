import React, { Component } from 'react';
import _ from 'lodash';
import { Auction } from '../requests';

class AuctionIndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      auctions: []
    }

    this.createAuction = this.createAuction.bind(this)
  }

  componentDidMount() {
    Auction.index()
      .then((auctions) => {
        this.setState((state) => {
          return {
            auctions: auctions
          }
        })
      })
  }

  deleteAuction(id) {

    
    this.setState((state) => {
      const stateClone = _.cloneDeep(state);
      return {
        auctions: stateClone.auctions.filter(q => q.id !== id) 
      }
    })
  }

  createAuction(params) {
    this.setState((state) => {
      return {
        auctions: [
          {
            id: (Math.max(...state.auctions.map(a => a.id)) + 1), 
            ...params
          },
          ...state.auctions
        ]
      }
    })
  }

  render() {
    return (
      <main>
        <h1>Auctions</h1>
        <ul style={{ padding: 0, listStyle: 'none'}}>
          {
            this.state.auctions.map(auction => {
              return(
                <li key={auction.id}>
                  <a href={`/auctions/${auction.id}`}>{auction.title}</a>
                  <button onClick={
                    () => this.deleteAuction(auction.id)
                  }>
                    Delete
                  </button>
                </li>
              )
            })
          }
        </ul> 
      </main>
    );
  }
}

export default AuctionIndexPage;