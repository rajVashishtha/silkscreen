import React from 'react';

import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
import {withRouter} from 'react-router-dom';
import NewButton from '../material/button.component'
import {connect} from 'react-redux'
import {setCurrentUser}  from '../../redux/user/user-action'




import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
   
  handleSubmit = async event => {
    event.preventDefault();
    const {setCurrentUser} = this.props
    const { email, password } = this.state;
    setCurrentUser({
      email,
      password
    })
    console.log(email, password)
    this.props.history.push("/")
    this.setState({
      email :'',
      password:''
    })
    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            {/* <CustomButton type='submit'> Sign in </CustomButton> */}
            {/* <CustomButton  isGoogleSignIn>
              Google
            </CustomButton> */}
            <NewButton variant="outlined"  type="submit">Sign In</NewButton>
          </div>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(withRouter(SignIn));
