import React from 'react'
import $ from 'jquery'
import './header.style.css'
// import Logo from '../../images/SILKSCREENLOGO2.png'
import shopping_cart from '../../images/shoping.svg'
import TocIcon from '@material-ui/icons/Toc';
import {Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import {setCurrentUser} from '../../redux/user/user-action'
// import CustomizedMenus from '../../components/customized-menu/customized-menu.component'
import './header.util'
import ButtonAppBar from '../appbar/appbar.component';


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
            user:null
        }
    }
    componentDidMount(){
        
    }
    displayModal = (event) =>{
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
        
        return(
    <div>
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


        <div className="navbar">
        <Link to="/" style={{textDecoration:"none"}}>
        <div className="navlink">
            <h2 style={
                {
                    paddingLeft:"20px",
                    letterSpacing:"2px",
                    fontSize:"30px"
                }
            }>Silkscreen</h2>
        </div>
        </Link>
            <div className="container" id="myTopnav">
            {/* <CustomizedMenus btnText="Products" texts={["hello"]}  /> */}
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
                    <h3 onClick={this.displayModal}>Contact Us</h3>
                </div>
                <div className="navlink" >
                    <h3 onClick={this.displayModal} id="myBtn">Why Us ?</h3>
                </div>
                <div className="navlink" >
                    <h3>Quotes</h3>
                </div>
            </div>


            <div className="container">
                <div className="navlink" style={{
                    paddingRight:"20px"
                }}>

                {
                    currentUser== null ? (<Link as="button" to="/signin" style={{
                        textDecoration:"none",
                        color:"white"
                    }}><h3>Sign In</h3></Link>) :
                    (<h3 onClick={this.signOut}>Sign Out</h3>)
                }

                    
                        
                </div>
                <hr style={{
                    height:"60%"
                }} />
                <div className="navlink"
                style={{
                    paddingRight:"0"
                }}>
                <Link to="/cart">
                <button style={{background:"none",
                border:"none",
                outline:"none",
                paddingTop:"7px",
                cursor:"pointer"
                    }}>
                    <img width="150%" height="150%" src={shopping_cart} alt="figure" />
                </button>
                </Link>
                </div>
            </div>

            


            <div className="container icon" onClick={this.showNav}>
                <TocIcon fontSize="large"  />
                </div>
        </div>
        <div className="mobile-bar">
            <ButtonAppBar pageName="Silkscreen" 
            currentUser={currentUser}
            signOut={this.signOut}
            displayModal={this.displayModal}
            logo={(<img width="50%" height="50%" src={shopping_cart} alt="figure" />)} />
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
