import React from 'react'
import './slideshow.style.css'

class SlideShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            changes : [
                { 
                   image: '/images/SILKSCREEN9.jpg',
                    text: 'Classic and Elegant Design',
                    button: 'Send Files',
                    back:'/images/attachments/wooden.jpg'
                },
                 { 
                   image: '/images/SILKSCREEN14.jpg',
                    text: 'Upto 30% off on bulks',
                    button: 'Order now',
                     back:'/images/attachments/gwooden.jpg'
                },
                 { 
                   image: '/images/SILKSCREEN21.jpg',
                    text: 'Design Bussiness advertisement',
                    button: 'Get help',
                     back:'/images/attachments/yellowblue.jpg'
                }
                ],
            current : {
                backUrl : process.env.PUBLIC_URL + '/images/attachments/yellowblue.jpg',
                url : process.env.PUBLIC_URL +'/images/SILKSCREEN21.jpg',
                text : "Design Bussiness advertisement",
                buttonText : "Get help"
            },
             i :0
        }
    }
    
    changeSlide() {
        this.setState((prevState) =>{
            if(prevState.i >= prevState.changes.length - 1){
                var temp = 0
            }
            else{
                temp = prevState.i + 1
            }
            return {
                current : {
                    backUrl : process.env.PUBLIC_URL + prevState.changes[temp].back,
                    url :process.env.PUBLIC_URL + prevState.changes[temp].image,
                    text : prevState.changes[temp].text,
                    buttonText : prevState.changes[temp].button
                },
                i : temp === 0 ? 0 : prevState.i+1
            }
        })
    };

    componentDidMount() {
        this.interval = setInterval(() => this.changeSlide(), 3000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render(){
        return(
            <div className="slideshow" >
                <img className="slideshow_image" id="slideshow" alt="figure" src={this.state.current.url} />
                <div className="slidetext">
                    <h1>{this.state.current.text}</h1><button>{this.state.current.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default SlideShow;