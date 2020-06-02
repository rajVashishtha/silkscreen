import React from 'react'
import SignIn from '../sign-in/sign-in.component'
import SignUp from '../sign-up/sign-up.component'
import './signup-signin.style.css'

const SignUpAndSignIn = ({ChangeSign}) =>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn ChangeSign={ChangeSign} />
            <hr />
            <SignUp ChangeSign={ChangeSign} />
        </div>
    )
}
export default SignUpAndSignIn