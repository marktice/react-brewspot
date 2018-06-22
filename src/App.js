import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import BeerListPage from './pages/BeerListPage';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              routes={[
                {
                  pathName: 'Beers',
                  uri: '/beers'
                },
                {
                  pathName: 'Contact',
                  uri: '/contact'
                }
              ]}
            />
            <Switch>
              <Route path="/beers" component={BeerListPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
