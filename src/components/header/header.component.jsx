import React from 'react'
import $ from 'jquery'
import './header.style.css'
import Logo from '../../images/SILKSCREENLOGO2.png'
import shopping_cart from '../../images/shoping.svg'
import TocIcon from '@material-ui/icons/Toc';
import {Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import {setCurrentUser} from '../../redux/user/user-action'
import './header.util'
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
    constructor(props){
        super(props);
        this.state = {
            signmodal : false,
            user:null
        }
    }
    componentDidMount(){
        
    }
    signOut = () =>{
        const {setCurrentUser} = this.props;
        setCurrentUser(null)
    }
    
    showNav = () => {
        var x = $("#myTopnav");
        if(x.css("display") === "none")
        {
            
            x.css('display','flex')
        }
        else{
            x.css('display','none')
        }
  
    }
   
    render(){
        const {currentUser} = this.props
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
                return {signmodal : prevState.signmodal ? false : true,
                user: localStorage.getItem('user')
                }
            })
        }
        
        return(
    <div>
        <div className="header">
            <Link to="/">
            <div className="logo_div">
                <img src={Logo} alt="figure" />
            </div>
            </Link>
            <div className="link_div">
                <button style={{border:"none"}} onClick={this.displayModal}>Contact Us</button>
                {
                    currentUser== null ? (<Link as="button" to="/signin"><button>Sign In</button></Link>) :
                    (<button onClick={this.signOut}>Sign Out</button>)
                }
                <button style={{paddingBottom : "0.9rem"}}><img width="150%" height="150%" src={shopping_cart} alt="figure" /></button>
                <div id="myModal" className="modal-2">
                      <div className="modal-content-2">
                        <div className="modal-header">
                          <span className="close"  onClick={this.displayModal}>&times;</span>
                          <h2 style={{marginLeft:"2rem"}}>Why Us ?</h2>
                        </div>
                          <div id="modal1">
                        <div className="modal-body-2" style={{backgroundColor:`hexToRgb("#D7E6FA")`}}>
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
        </div>


        <div className="navbar">
            <div className="container" id="myTopnav">
                <div className="navlink">
                    <h3>Products</h3>
                    <div className="navlist">
                        <Link to="/products/adhesive_banner" style={{
                            textDecoration :"none"
                        }}><button>Adhesive Banners</button></Link>
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
                <div className="navlink" >
                    <h3 id="myBtn">Quotes</h3>
                </div>
            </div>
            <div className="container icon" onClick={this.showNav}>
                <TocIcon fontSize="large"  />
                </div>
        </div>
    </div>
        )
    }
};

const mapStateToProps = state =>({
    currentUser : state.user.currentUser
})
const mapDispatchToProps = dispatch =>({
    setCurrentUser : user => dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)
