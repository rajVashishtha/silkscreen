import React from 'react'
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Description from '../../components/desc section/desc.component';
// import ImageSection from '../../components/image section/image_section.component'
import Calculator from '../../components/calculator/calculator.component'
import './product.style.scss'

class ProductsPage extends React.Component{
    state = {

    }
    componentDidMount(){
        const {history} = this.props;
        let arr = history.location.pathname.split("/")
        const name = arr[arr.length - 1]
        this.setState({
            name: name
        }) 
    }

    render(){
        return(
            <div>
                <Header />
                <div className="address_div">
                <Link to="/" style={{
                    textDecoration:"none"
                }}><p className="address">Home</p></Link><p style={{
                    color:"#7AAFF7",
                    marginRight :".5rem",
                    marginLeft :".5rem"
                }}> / </p><p className="address">{

                    this.state.name
                }</p>
                </div>
                <div className="product_center">
                    <Description />
                    <hr />
                    <Calculator />
                </div>
                
                <Footer />
            </div>
        )
    }
};

export default withRouter(ProductsPage);