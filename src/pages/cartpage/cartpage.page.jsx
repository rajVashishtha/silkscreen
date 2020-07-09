import React from 'react'
import './cartpage.style.scss'
import MyHeader from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'
import Cart from '../../components/cart/cart.component'

class CartPage extends React.Component{
    render(){
        return(
            <div>
                <MyHeader />
                <Cart />
                <Footer />
            </div>
        )
    }
};

export default CartPage;