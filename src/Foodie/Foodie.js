import React, { Component } from 'react';
import './Foodie.css';
import PropTypes from 'prop-types';

class Foodie extends Component{
   constructor(props){
       super(props);
       this.foodieContent = props.foodieContent;
       this.foodieId = props.foodieId;
   }
   render(props){
       return(
           <div className="foodie fade-in">
               <p className="foodieContent">{this.foodieContent}</p>
           </div>
       )
   }
}

Foodie.propTypes={
foodieContent: PropTypes.string
}

export default Foodie;
