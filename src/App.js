import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './styles/collection.css';

import HeadBar from './components/Headbar';
import './App.css';
import Details from './components/Details.js';
import Item from './components/Item';
import ItemList from './components/ItemList';
import Collection from './components/Collection';


class App extends Component {
  render() {




    return (
      <div className="app-main">
        <HeadBar/>

          {/* this is where collection of movies will go */}
          <Router>
            <div>
              <Route exact path="/" component={Collection} />
              <Route path="/details" component={Details} />

            </div>
          </Router>


      </div>

    );
  }
}

export default App;
