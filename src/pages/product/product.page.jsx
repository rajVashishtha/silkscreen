import React from 'react'
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'
import {withRouter} from 'react-router-dom'

class ProductsPage extends React.Component{
    
    componentDidMount(){
        const {history} = this.props;
        let arr = history.location.pathname.split("/")
        console.log(arr[arr.length - 1])
    }

    render(){
        return(
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
};

export default withRouter(ProductsPage);