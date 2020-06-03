import React from 'react';

import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
import {withRouter} from 'react-router-dom'
import Button from'@material-ui/core/Button'


import './sign-up.styles.scss';


class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const {ChangeSign} = this.props
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    console.log(displayName, email)

    try {
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      this.props.history.push(this.props.location.pathname)
      ChangeSign()
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <Button variant="outlined" color="primary" type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
