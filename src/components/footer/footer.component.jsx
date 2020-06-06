import React from 'react'
import './footer.style.css'
import {displayModal} from '../header/header.component'


const Footer = () =>{

    return(
        <div className="footer">
                 <h2 style={{
                     color:"white",
                     textAlign :"center",
                     fontSize : "3rem",
                    
                 }}>Why print here ?</h2>
                <div className="footer_center">
                     <div className="footer_card" style={{
                         marginTop:"0rem",
                     }}>
                        <h2>We are always before time</h2>
                         <br />
                        <p>We keep our work at highest priority and deliver it at an unconditionally pace with guareented best quality.</p>
                        
                        
                    </div>
                     <div className="footer_card">
                        <h2>We are Eco-Friendly</h2>
                         <br />
                       <p>Our Printers works on Green Tech INK Mechanism, that is our commitment to provide eco-friendly green Painting domains, We care for our green environment. </p>
                        
                    </div>
                      <div className="footer_card">
                        <h2>Our Commitment </h2>
                         <br />
                       <p>We are famous because of our clients' satisfaction in our products and  our commitments made to them .</p>
                        
                    </div>
                     <div className="footer_card">
                        <h2>Business ladder </h2>
                         <br />
                       <p>We have also started from scratch and we understand Bussiness  Growth. With us, you can completely rely  on ‘SilkScreen’ for your business advertisement . </p>
                        
                    </div>
                  
                   
                </div>
                <hr style={{
                    width : "95%",
                    borderRadius : ".4rem",
                    border :"none",
                    borderBottom : "solid .4rem white",

                }} />
                
                <div className="footer_center_2 footer_2">   
                     <div className="footer_card" style={{width: "25%"}}>
                        <h4>SilkScreen</h4>
                        <br />
                        <a href="#/" style={{color:"blue"}}>SilkScreen Pvt.Ltd,
                        	Shankar Towers A-30,First Floor-103,
                        	Associated Industrial Estate,
                        	Balanagar,Hyderabad-500037</a>
                        
                    </div>
                     <div className="footer_card">
                        <h4>About us</h4>
                        <br />
                        <a href="#/" onClick={displayModal} id="footer_contact">Contact</a>
                        <a href="#/">Location</a>
                        
                        
                    </div>
                     <div className="footer_card">
                        <h4>Place an order</h4>
                        <br />
                        <a href="#/">My account</a>
                        <a href="#/">Get an estimation</a>
                         <a href="#/">Place an order</a>
                         <a href="#/">Send a file</a>
                         <a href="#/">Customer service</a>
                        
                    </div>
                    <div className="footer_card">
                        <h4>Help and Support</h4>
                        <br />
                        <a href="#/">Online proofing</a>
                        
                    </div>
                    <div className="footer_card">
                        <h4>Connect</h4>
                        <br />
                        <a href="#/">Facebook</a>
                        <a href="#/">Linkedin</a>
                        <a href="#/">Twitter</a>
                        <a href="#/">Our blog</a>
                        
                    </div>
                    
                </div>
            </div>
    )
};

export default Footer