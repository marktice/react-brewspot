import React, { Component } from 'react';

import beerAPI from './../api/beerAPI';
import BeerPage from './BeerPage';
import Beer from './../components/Beer';

class BeerListPage extends Component {
  state = {
    beers: null
  };
  // Class Methods
  handleDeleteBeer = (id) => {
    beerAPI
      .deleteBeer(id)
      .then((result) => {
        this.setState((prevState) => {
          return {
            beers: prevState.beers.filter((beer) => beer.id !== id)
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Lifecycle methods
  componentDidMount() {
    beerAPI
      .fetchBeers()
      .then((beersData) => {
        const beers = beersData.map((beer) => {
          return {
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            imageURL: beer.image_url
          };
        });
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
      <div className="beer-list-page">
        <h1>Beerslist</h1>
        <div className="beer-list">
          {beers.map((beer) => {
            return (
              <Beer
                key={beer.id}
                {...beer}
                handleDeleteBeer={this.handleDeleteBeer}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BeerListPage;
