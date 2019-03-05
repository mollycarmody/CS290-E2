import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../styles/item.css';

export class Item extends Component {
  constructor(props){
    super(props);
    this.state={
      favStatus:false
    }
  }
  handleFav = () => {
    console.log("clicked");
    this.setState({
      favStatus:!this.state.favStatus
    });
  }
  // <button className="btn btn-secondary btn-sm">Favorite</button>
  render() {

    let data = {pathname: '/details', name: this.props.name, releaseDate:this.props.releaseDate, rating: this.props.rating, channel:this.props.channel }
    let heartColor = this.state.favStatus? "red":"white";
    return(

      <div className = "main">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>

        <div className="image">
          <Link to={data}><img src={this.props.img} alt=""></img></Link>
        </div>

        <h3> {this.props.name} </h3>
          <i className="glyphicon glyphicon-heart" aria-hidden="true" onClick={()=>this.handleFav()} style={{color:heartColor}}/>
        <div>

        </div>
      </div>

     )

  }
}

export default Item;
