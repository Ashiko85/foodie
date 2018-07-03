import React, { Component } from 'react';
import './Foodie.css';
import PropTypes from 'prop-types';

class Foodie extends Component{

    constructor(props){
        super(props);
        this.orderContent = props.orderContent;
        this.orderId = props.orderId;
        this.handleRemoveOrder = this.handleRemoveOrder.bind(this);
    }

    handleRemoveOrder(id){
        this.props.removeOrder(id);
    }

    render(){
        return(
            <div className="panel panel-default order">
                <div className="panel-body">
                    <span className="closebtn"
                          onClick={() => this.handleRemoveOrder(this.orderId)}>
                      &times;
                </span>
                    <p className="orderContent">{ this.orderContent }</p>
                </div>
            </div>
        )
    }
}

Foodie.propTypes = {
    orderContent: PropTypes.string
}

export default Foodie;
