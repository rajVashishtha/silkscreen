import React from 'react'
import SignIn from '../sign-in/sign-in.component'
import SignUp from '../sign-up/sign-up.component'
import './signup-signin.style.css'
import $ from 'jquery'

const switchForm = (event) =>{
    const {target} = event;
    $("#sign-in, #sign-up").css("border", "none")
    $("#"+target.id).css("border-bottom","2px solid #7AAFF7")
    if($(".signup").css("display") === "none"){
        $(".signup").css("display","block")
        $(".signin").css("display", "none")
    }
    else{
        $(".signup").css("display","none")
        $(".signin").css("display", "block")
    }
}


const SignUpAndSignIn = ({ChangeSign}) =>{
    return(
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}>
            <div className="btn-box">
                <button id="sign-in" onClick={switchForm}>Sign In</button>
                <button id="sign-up" onClick={switchForm}>Sign Up</button>
            </div>
            <div className='sign-in-and-sign-up'>
                <div className="signin">
                    <SignIn />
                </div>
                <hr className="hr" />
                <div className="signup" >
                    <SignUp />
                </div>
                
            </div>
        </div>
    )
}
export default SignUpAndSignIn