import React from 'react'
import SignUpAndSignIn from '../../components/signup-signin/signup-signin.component'
import Header from '../../components/header/header.component'
// import Footer from '../../components/footer/footer.component'

class SignPage extends React.Component{

    render(){

        return(
            <div>
            <Header />
            <SignUpAndSignIn />
          
            </div>
        )
    }
}

export default SignPage