import React, { Component } from 'react';

import beerAPI from './../api/beerAPI';

class BeerPage extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    console.log('id: ', this.props.id);
    beerAPI
      .fetchBeer(this.props.id)
      .then((beer) => {
        this.setState((prevState) => {
          return {
            beer
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.beer) {
      return <div>Loading beer...</div>;
    }
    return <div className="beer-page">from BeerPage</div>;
  }
}

export default BeerPage;
