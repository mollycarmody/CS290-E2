import React, { Component } from 'react';

class ItemList extends Component {
 state = {
   shows: [ {id: 1, name: "The Office"},
   {id: 2, name: "The Vampire Diaries"},
   {id: 3, name: "New Girl"},
   {id: 4, name: "The Good Doctor"}
   ]

 }



/* This is an array of the links to photos of the TV Shows listed above

const showImages = [ {"https://is3-ssl.mzstatic.com/image/thumb/Video1/v4/cd/2d/23/cd2d23b4-c236-f94d-4a4f-d90030866d6f/mzl.vytmeykc.lsr/268x0w.png",
 "https://www.exploregeorgia.org/sites/default/files/styles/slideshow_large/public/legacy_images/vampire-diaries-cover-1485275999.jpg?itok=LGTdX3aZ",
 "https://vignette.wikia.nocookie.net/newgirl/images/b/bd/New_girl_season_4_2.jpg/revision/latest?cb=20140731072024",
 "https://m.media-amazon.com/images/M/MV5BMTU3NDc3ODE2M15BMl5BanBnXkFtZTgwNTk1OTYzNjM@._V1_.jpg",
];*/

 render() {

   let names = ["newGirl", "theGoodDoctor", "theOffice", "theVampireDiaries", "westWorld", "whiteCollar"];

  /* let images = names.map(image => { return <img key={image} src={require('./images/${image}.jpg')} alt=""/>}) */
     return (

       <div className="container">
            <footer className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h4>Shows</h4>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                 </div>
            </footer>
        </div>




/*
      <div>
        { this.state.shows.map((show, index) => (
           <p> This is show number {show.id} and it is called {show.name} </p>
         ))

         }
      </div>
*/

       /*{ this.state.showImages.map((show, index) => (
        <p> This is show number {show.id} and it is called {show.link} </p>
        <img src="{show.link}" alt="{show.name}"></img>
      ))
      } */


  );


 }

}


export default ItemList;
