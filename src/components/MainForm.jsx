// MainForm.jsx
import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import PhoneNumber from './PhoneNumber';
import DobGender from './DobGender';
import Success from './Success';



class MainForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
    address: '',
    city: '',
    state: '',
    dobmonth: '',
    dobday: '',
    dobyear: '',
    phoneNumber: '',
    gender: ''
    }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step : step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step : step - 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  }


  render(){
    const {step} = this.state
    const { firstName, lastName, email, zip, address, city, state, dobmonth, dobday, dobyear, phoneNumber, gender } = this.state
    const values = { firstName, lastName, email, zip, address, city, state, dobmonth, dobday, dobyear, phoneNumber, gender }

    switch(step){
      case 1:
        return <UserDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
      case 2:
        return <PersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
      case 3:
        return <PhoneNumber
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
      case 4:
        return <DobGender
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
      case 5:
        return <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
      case 5:
        return <Success />
    }
  }
}

export default MainForm;
