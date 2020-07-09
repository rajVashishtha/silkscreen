import React from 'react'
import './cartitem.style.scss'

class CartItem extends React.Component{
    render(){
        return(
            <div className="main-forcartitem">
                <div className="forImage">
                        <img alt="imag here" />
                   </div>
                   <div className="forName">
                        <h4>
                            Product Name
                        </h4>
                   </div>
                   <div className="forQuantity">
                        <h3>
                            2
                        </h3>
                   </div>
                   <div className="forPrice">
                       <h3>
                           35
                       </h3>
                   </div>
                   <div className="forRemove">
                        <h3>
                            X
                        </h3>
                   </div>
            </div>
        )
    }
};
export default CartItem