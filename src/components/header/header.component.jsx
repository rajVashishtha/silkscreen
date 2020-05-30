import React from 'react'
import $ from 'jquery'
import './header.style.css'
import Logo from '../../images/SILKSCREENLOGO.png'
import shopping_cart from '../../images/shoping.svg'
import SignUpAndSignIn from '../signup-signin/signup-signin.component'
export const displayModal = (event) =>{
    var {target} = event
    
    if(target.id === "myBtn"){
        $(".modal-header > h2").text("Why Us ?")
        $("#modal2").css("display", "none")
        $("#modal1").css("display","block")
       
    }
    else{
        $(".modal-header > h2").text("Contact Us")
        $("#modal2").css("display", "block")
        $("#modal1").css("display","none")
    }
    var temp = $("#myModal").css("display")

    document.getElementById("myModal").style.display = (temp === "none") ? "block" : "none"
};

class MyHeader extends React.Component{
    state = {
        signmodal : false
    }
   
    
    
    render(){
        this.displayModal = (event) =>{
            var {target} = event
            console.log(target.id)
            if(target.id === "myBtn"){
                $(".modal-header > h2").text("Why Us ?")
                $("#modal2").css("display", "none")
                $("#modal1").css("display","block")
                
            }
            else{
                $(".modal-header > h2").text("Contact Us")
                $("#modal2").css("display", "block")
                $("#modal1").css("display","none")
            }
            var temp = $("#myModal").css("display")
    
            document.getElementById("myModal").style.display = (temp === "none") ? "block" : "none"
        };
        this.changeSign = () => {
            this.setState((prevState) => {
                return {signmodal : prevState.signmodal ? false : true}
            })
        }
        
        return(
    <div>
        <div className="header">
            <div className="logo_div">
                <img src={Logo} alt="figure" />
            </div>
            <div className="link_div">
                <button style={{border:"none"}} onClick={this.displayModal}>Contact Us</button>
                <button onClick={this.changeSign}>Sign In</button>
                <button style={{paddingBottom : "0.9rem"}}><img width="150%" height="150%" src={shopping_cart} alt="figure" /></button>
                <div id="myModal" className="modal-2">
                      <div className="modal-content-2">
                        <div className="modal-header">
                          <span className="close"  onClick={this.displayModal}>&times;</span>
                          <h2 style={{marginLeft:"2rem"}}>Why Us ?</h2>
                        </div>
                          <div id="modal1">
                        <div className="modal-body-2">
                          <ul>
                            <li>
                              Eco Friendly
                              </li>
                              <li>
                              Door Step Delivery
                              </li> 
                              <li>
                                Follow Your Design
                              </li> 
                              <li>
                                Under time delivery
                              </li>
                              <li>
                                Free product if time exceeds
                              </li>
                            </ul>
                        </div>
                          </div>
                          <div id="modal2">
                            <div className="modal-body">
                          <ul>
                               <li>
                              Owner :- Demo Name
                              </li>
                            <li>
                              Contact :- 999999999
                              </li>
                              <li>
                              Email :- demoemail@gmail.com
                              </li> 
                            </ul>
                        </div>
                          </div>
                      </div>
                    </div>
            </div>
            {
                    this.state.signmodal ? (
                        <div className="modal">
                    <div className="modal-content">
                        <span className="close" style={{marginRight: "2rem" ,color:"black"}} onClick={this.changeSign}>&times;</span>
                        <div className="modal-body">
                           <SignUpAndSignIn />
                        </div>
                    </div>
                </div>
                    ) : (null)
                }
        </div>


        <div className="navbar">
            <div className="container">
                <div className="navlink">
                    <h3>Products</h3>
                    <div className="navlist">
                        <button>Adhesive Banners</button>
                        <button>Advertising Banners</button>
                        <button>Banners with Standee</button>
                        <button>Backlit Banners</button>
                        <button>One way vision Banners</button>
                        <button>Event Banners</button>
                         <button>Trade Show Banners</button>
                        <button>Banners for all occasions</button>
                    </div>
                </div>
               
                 <div className="navlink">
                    <h3>Help Center</h3>
                    <div className="navlist">
                        <button>Adhesive Banners</button>
                        <button>Advertising Banners</button>
                        <button>Banners with Standee</button>
                        <button>Backlit Banners</button>
                    </div>
                </div>
                <div className="navlink" >
                    <h3>Contact Us</h3>
                    <div className="navlist">
                        
                        <button><i className="fab fa-whatsapp"></i>&nbsp;7488205050 </button>
                        <button><i className="far fa-envelope"></i>&nbsp; Email Us</button>
                    </div>
                </div>
                
                <div className="navlink" onClick={this.displayModal}>
                    <h3 id="myBtn">Why Us ?</h3>
                </div>
        

            </div>
        </div>
    </div>
        )
    }
}

export default MyHeader
