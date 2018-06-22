import React, { Component } from 'react';

import beerAPI from './../api/beerAPI';

class BeerListPage extends Component {
  state = {
    beers: null
  };

  componentDidMount() {
    beerAPI
      .fetchBeers()
      .then((beers) => {
        this.setState((prevState) => {
          return {
            beers
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { beers } = this.state;
    if (!beers) {
      return <h3>fetching beers...</h3>;
    }
    return (
      <ul>
        <h1>Beerslist</h1>
        {beers.map((beer) => {
          return <li key={beer.id}>{beer.name}</li>;
        })}
      </ul>
    );
  }
}

export default BeerListPage;
