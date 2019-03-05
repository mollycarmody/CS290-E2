import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
import '../styles/details.css';

export class Details extends Component{
  constructor(props){
    super(props);

  }
  render(){
    let sta
    return(
    <div className="main">
        <div className= "header">
            <h1> Details about {this.props.location.name}</h1>
        </div>
        <div className= "about">
            <p> released : {this.props.location.releaseDate}</p>
            <br/>
            <p> channel : {this.props.location.channel}</p>
        </div>
        <div>
        <StarRatings
          rating={this.props.location.rating}
          starRatedColor="yellow"
          numberOfStars={10}
          name='rating'
        />
        </div>

    </div>

    );

  }


}
export default Details;
