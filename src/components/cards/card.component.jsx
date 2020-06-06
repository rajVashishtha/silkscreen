import React from 'react'
import './card.style.css'
import OneCard from '../onecard/onecard.component'
import $ from 'jquery'

import NewButton from '../material/button.component'

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            banners_list : [
                'Adhesive Banner',
                'Advertising Banner',
                'Backlit Banner',
                'Banner with Standee',
                'Event Banner',
                'Tradeshow Banner',
                'One Way Vision Banner',
                'Banners for all Occasions'
            ],
            imageUrl : [
                'images/SILKSCREEN18.jpg',
                'images/SILKSCREEN22.jpg',
                'images/SILKSCREEN10.jpg',
                'images/SILKSCREEN7.jpg',
                'images/SILKSCREEN16.jpg',
                'images/SILKSCREEN17.jpg',
                'images.jpg',
                'images.jpg'
            ],
            links :[
                'product/?p=adhesive_banner',
                'product/?p=advertising_banner',
                'product/?p=backlit_banner',
                'product/?p=banner_with_standee',
                'product/?p=event_banner',
                'product/?p=tradeshow_banner',
                'product/?p=oneway_vision_banner'
            ],
            banners_desc : [
                "Whether you’re listing your business or promoting new products, adhesive banners are the best way to get attention.",
                "Put your brand ahead of the competition not just every day but every night too.Let us help you and believe us that your work are in best hands.",
                "Backlit Banners are a great way to showcase your graphics at night time.Let us help to make your Advertising come to life at night.",
                "The standee banners are an important part of a marketing kit to make your presence felt amongst the prospective clients.Let us help you.",
                "Want to attract mass audience towards an event,Let us help you out.You are just few steps away.",
                "Need high-quality, functional custom trade show exhibits, rentals & mobile exhibits. Let us help you out.",
                "One side banner -Want to put banner on glass -you are just a few clicks away.",
                "We’ve worked hard to hone our craft. And our banner printing experts are ready to help you grab the attention of your audience."
            ],
            quantity : 5
        }
    }//end constrictor
    increaseQuantity = () => {
        this.setState((pre)=>{
            if(pre.quantity === 5){
                $(".view_more_div > button").text("View Less")
                $(".extrasearch").css("display","flex")
            }
            else{
                $(".view_more_div > button").text("View More")
                $(".extrasearch").css("display","none")
            }
           return {
                quantity : pre.quantity === 5 ? 7 : 5
            }
        })
    }
  

    render(){
        return(
            <div className="main_body">
                <h1>Featured Products</h1>
                <hr style={{marginTop: "2rem"}}></hr>
                <div className="cards_div">
                    {// eslint-disable-next-line
                          this.state.banners_list.map((item, index)=>{
                              if(index <= this.state.quantity){
                                  return (<OneCard imageUrl={this.state.imageUrl[index]} bannerName={item} bannerDesc={this.state.banners_desc[index]} link={this.state.links[index]} key={item}/>)
                              }
                              
                          }   
                        )
                    }
                    <div style={{display: "flex", flexDirection : "column" , justifyContent: "center"}}>
                        <div className="view_more_div">
                            <h2>Something Else ?</h2><NewButton variant="contained" onClick={this.increaseQuantity}>View More</NewButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Cards;