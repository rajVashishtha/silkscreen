import React from 'react'
import './cart.style.scss'
import CartItem from '../cart-item/cartitem.component'

class Cart extends React.Component{
    render(){
        return(
           <div className="main">
               <div className="heads">
                    <h4>
                        Product
                    </h4>
                    <h4>
                        Description
                    </h4>
                    <h4>
                        Quantity
                    </h4>
                    <h4>
                        Price
                    </h4>
                    <h4>
                        Remove
                    </h4>
               </div>
               <div className="body">
                   <CartItem />
                   <CartItem />
               </div>

           </div>
        )
    }
};

export default Cart