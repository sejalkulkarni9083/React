import React from "react";
import data  from '../data/cart.json';
import Item from "./Item";
class Cart extends React.Component{
    render(){
        const cartitems=data;
        

    return(
        <div>
            <h2>My Shopping Cart</h2>
            {
            cartitems.map(item=> (
                <Item 
                title ={item.title}
                imageurl={item.imageurl}
                price={item.price}
                quantity={item.quantity}
                />
            ))
        }
        </div>
    )

}
}

export default Cart;