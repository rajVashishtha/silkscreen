import React from 'react'
import MyHeader from '../../components/header/header.component'
import SlideShow from '../../components/slideshow/slideshow.component'
import Cards from '../../components/cards/card.component'
import './homepage.style.css'
import CheckBox from '../../components/checkboxes/checkbox.component'
import Footer from '../../components/footer/footer.component'

class HomePage extends React.Component{

    render(){

        return(
            <div>
                <MyHeader />
                <SlideShow />
                <Cards />
                <CheckBox />
                <Footer />
            </div>
        )
    }
}

export default HomePage;