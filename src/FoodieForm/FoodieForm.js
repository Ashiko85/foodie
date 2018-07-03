import React, { Component } from 'react';
import './FoodieForm.css';

class FoodieForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newOrderContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeOrder = this.writeOrder.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newOrderContent: e.target.value,
        })
    }

    writeOrder(){

        this.props.addOrder(this.state.newOrderContent);

        this.setState({
            newOrderContent: '',
        })
    }

    render(){
        return(

            <div className="form-group">
                <label>Enter your order:</label>
                <textarea className="form-control" rows="2"
                          placeholder="Write a new order..."
                          value={this.state.newOrderContent}
                          onChange={this.handleUserInput}>
            </textarea>
            <button className="orderButton"
        onClick={this.writeOrder}>Add Order</button>
            </div>


        )
    }
}

export default FoodieForm;
