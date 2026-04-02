import React from "react";
class Item extends React.Component{

    constructor(props){
        super(props);
        //initializing state by taking likes(value) from props
        this.state={quantity:props.quantity};
    }

    render(){
        return(
            <div>
                <h2>Items Details</h2>
                <hr/>
                <p>Title:{this.props.title}</p>
                <img src={this.props.imageurl} width="100"height="100"/>
                <p>Quantity : {this.props.quantity}</p>
                <p>Unit Price: {this.props.price}</p>
                <p>Amount:{this.props.price *this.props.price} Rs.</p>
                <br/>
                
                <button>Remove</button>

            </div>
        )
    }
}
export default Item;