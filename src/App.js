import React, { Component } from 'react';
import './App.css';
import Foodie from './Foodie/Foodie.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            foodies:[
                {id: 1, foodieContent: "First order here"},
                {id: 2, foodieContent: "Second order here"}
            ],
        }
    }
  render() {
    return (
      <div className ="foodieWrapper">
        <div className="foodieHeader">
          <div className="heading">Foodie</div>
        </div>
        <div className="foodieBody">
            {
                this.state.foodies.map((foodie) => {
                    return(
                        <Foodie foodieContent={foodie.foodieContent} foodieId={foodie.id} key={foodie.id}/>
                    )
                })
            }

        </div>
        <div className="foodieFooter">
            Input here
        </div>
      </div>
    );
  }
}

export default App;
