//Dependencies
import React, { Component } from 'react';

//Assets
import './App.css';
import wall from './images/ewmyh.jpg';

var obj = require("./data/data_melp.json");

function searchingFor(term) {
  return function(x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

function searchRating(rati) {
  return function(y) {
    return y.rating || !rati;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        obj: obj,
        term: '',
        rati: '',
      }
      this.searchHandler = this.searchHandler.bind(this);
      this.ratingHandler = this.ratingHandler.bind(this);
    }

    searchHandler(event) {
      this.setState({term:event.target.value})
    }

    ratingHandler(event) {
      this.setState({rati:event.target.value})

    }

  render() {
    const {term, rati, obj} = this.state;
    return(
      <div className="App">
        <div className="image-container">
          <img className="wall" src={wall} alt="ima-wall"/>
        </div>
        <p><a href="https://github.com/alexkmx/melp-prototype" alt="github"><i className="fa fa-github"></i></a></p>
        <span className="texto">
          <h1>Encuentra los mejores restaurantes en México.</h1>
        </span>
        <div className="form-container">
          <form>
            Por Nombre:
            <input type="text"
              onChange={this.searchHandler}
              value={term}
            />
          </form>
          <form>
            Por Ranking:
            <input type="text"
              onChange={this.ratingHandler}
              value={rati}
            />
          </form>
      </div>
      <div className="rest-containers">
      {
        obj.filter(searchingFor(term)).filter(searchRating(rati)).map(allElements =>
            <div className="info-container">

              <h6>Nombre: {allElements.name}</h6>
              <p className="bold">Contacto</p>
              <p><i className="fa fa-home"></i><a href="#" target="_blanck" alt="link"> {allElements.contact.site}</a></p>
              <p><i className="fa fa-envelope"></i> {allElements.contact.email}</p>
              <p><i className="fa fa-phone-square"></i> {allElements.contact.phone}</p>
              <p className="bold">Dirección</p>
              <p>Calle: {allElements.address.street}</p>
              <p>Ciudad: {allElements.address.city}</p>
              <p>Estado: {allElements.address.state}</p>
              <p className="bold">Localización</p>
              <p>Latitud: {allElements.address.location.lat}</p>
              <p>Longitud: {allElements.address.location.lng}</p>
              <p>Rating: {allElements.rating}</p>
              <div class="fb-like" data-href="https://federico.com" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
            </div>
          )
        }
      </div>

    </div>
    )
  }
}

export default App;
