import React, { Component } from 'react';
import HeadBar from './Headbar';
import '../App.css';
import Item from './Item';
import ItemList from './ItemList';
import '../styles/collection.css';
class App extends Component {
  render() {
    const items = [
      {
        id:0,
        label:"New Girl",
        url: "https://static.next-episode.net/tv-shows-images/huge/new-girl.jpg",
        details:"its new girl"
      },
      {
        id:1,
        label:"The Office",
        url:"https://www.indiewire.com/wp-content/uploads/2017/12/shutterstock_5886251cz.jpg?w=884",
        details:"its the office"
      }
    ];

    const Shows = [
        {id: 1,name: "New Girl",channel:"Fox",releaseDate: "September 2011",rating: 7.7, img: "https://static.next-episode.net/tv-shows-images/huge/new-girl.jpg"},
        {id: 2, name: "The Good Doctor", channel:"ABC", releaseDate: "September 2017", rating: 8.3, img: "http://www.gstatic.com/tv/thumb/tvbanners/15767779/p15767779_b_v8_ab.jpg"},
        {id: 3, name: "The Office", channel:"MBC", releaseDate: "March 2005", rating: 8.8, img: "https://www.indiewire.com/wp-content/uploads/2017/12/shutterstock_5886251cz.jpg?w=884"},
        {id: 4, name: "Gossip Girl", channel:"The CW", releaseDate: "September 2007", rating: 7.4, img: "http://www.gstatic.com/tv/thumb/tvbanners/185575/p185575_b_v8_ag.jpg"},
        {id: 5, name: "Grey's Anatomy", channel:"ABC", releaseDate: "March 2005", rating: 7.6, img: "http://www.gstatic.com/tv/thumb/tvbanners/15767896/p15767896_b_v8_ab.jpg"},
        {id: 6, name: "Stranger Things", channel:"Netflix", releaseDate: "July 2016", rating: 8.9, img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg"},
        {id: 7, name: "Game of Thrones", channel:"HBO", releaseDate: "April 2011", rating: 9.5, img: "http://www.gstatic.com/tv/thumb/tvbanners/14160794/p14160794_b_v8_aa.jpg"},
        {id: 8, name: "The Bachelor", channel:"ABC", releaseDate: "March 2002", rating: 3.1, img: "https://akns-images.eonline.com/eol_images/Entire_Site/2017930/rs_600x600-171030134245-600-bachelor.cm.103017.jpg?fit=inside|900:auto&output-quality=90"},
        {id: 9, name: "The Vampire Diaries", channel:"The CW", releaseDate: "September 2009", rating: 7.7, img: "https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY268_CR0,0,182,268_AL_.jpg"},
        {id: 10, name: "Brooklyn Nine-Nine", channel:"TBS", releaseDate: "September 2013", rating: 8.4, img: "https://m.media-amazon.com/images/M/MV5BMGU3NGYyYTYtYjIzMS00ZmUwLTlmMjAtZDhhMzFiNWI0NzNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UY268_CR3,0,182,268_AL_.jpg"},
        {id: 11, name: "Friends", channel:"NBC", releaseDate: "September 1994", rating: 8.9, img: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg"},
        {id: 12, name: "Full House", channel:"ABC", releaseDate: "September 1987", rating: 6.7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAh23diBOQCrYf4eeGCc8NxySPcCjFkrOuHfbSh28tNBuujEoH"},
        {id: 13, name: "Breaking Bad", channel:"FX", releaseDate: "January 2008", rating: 9.5, img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2010/12/breaking-bad-S5-400x600-compressedV1.jpg"},
        {id: 14, name: "Saturday Night Live", channel:"NBC", releaseDate: "October 1975", rating: 8.1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6eBtYithGEq3CF3B72x5jbb3QwfItnKvU2IcqHEtNCL5MEFkPg"},
        {id: 15, name: "Gilmore Girls", channel:"UP", releaseDate: "October 2000", rating: 8.2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOCqM8HKCUic5wiS6_f2Avnbzzz7BGRnrqkf5wDsUFkSdU3jj"},
        {id: 16, name: "60 Minutes", channel:"CBS", releaseDate: "September 1968", rating: 7.5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-L-nUB0yDZbqjiVhNTfUFpTMASbnzMbRJY3C6j7PNN24W_Cr_3A"}
  ];
    const tableInfo = Shows.map((oneItem) =>
          <Item {...oneItem}/>
      );
    return (
      <div>
        <div className="container">
          {/* this is where collection of movies will go */}

          {tableInfo}
        </div>
      </div>

    );
  }
}

export default App;
