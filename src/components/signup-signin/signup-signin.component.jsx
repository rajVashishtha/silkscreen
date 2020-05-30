import React from 'react'
import SignIn from '../sign-in/sign-in.component'
import SignUp from '../sign-up/sign-up.component'
import './signup-signin.style.css'

const SignUpAndSignIn = () =>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
export default SignUpAndSignIn