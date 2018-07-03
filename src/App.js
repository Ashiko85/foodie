import React, { Component } from 'react';
import Foodie from './Foodie/Foodie';
import FoodieForm from './FoodieForm/FoodieForm';
import { DB_CONFIG } from './Config/Config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import './food.jpg';


class App extends Component {

    constructor(props){
        super(props);
        this.addOrder = this.addOrder.bind(this);
        this.removeOrder = this.removeOrder.bind(this);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('orders');

        this.state = {
            orders: [],
        }
    }

    componentWillMount(){
        const previousOrders = this.state.orders;

        // DataSnapshot
        this.database.on('child_added', snap => {
            previousOrders.push({
                id: snap.key,
                orderContent: snap.val().orderContent,
            });

            this.setState({
                oeders: previousOrders
            })
        });
        

        this.database.on('child_removed', snap => {
            for(var i=0; i < previousOrders.length; i++){
                if(previousOrders[i].id === snap.key){
                    previousOrders.splice(i, 1);
                }
            }

            this.setState({
                orders: previousOrders
            })
        })
    }

    addOrder(order){
        this.database.push().set({ orderContent: order});
    }

    removeOrder(orderId){
        console.log("from the parent: " + orderId);
        this.database.child(orderId).remove();
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-12 ordersHeader">
                    Foodie
                </div>
                <div className="col-sm-12">
                    {
                        this.state.orders.map((order) => {
                            return (
                                <Foodie orderContent={order.orderContent}
                                      orderId={order.id}
                                      key={order.id}
                                      removeOrder ={this.removeOrder}/>
                            )
                        })
                    }
                </div>
                <div className="col-sm-12 ordersFooter">
                    <FoodieForm addOrder={this.addOrder} />
                </div>
            </div>
            </div>
        );
    }
}

export default App;
