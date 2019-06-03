// PhoneNumber.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PhoneDisclaimer from './PhoneDisclaimer';

class PhoneNumber extends Component {
  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render(){
    const { values } = this.props
    return(
      <div>
      <Form color='blue' >
        <h1 className="ui centered">What is your contact phone number?</h1>
        <Form.Field>
          <input placeholder='Phone Number'
           onChange={this.props.handleChange('phoneNumber')}
           defaultValue={values.phoneNumber}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Continue</Button>
      </Form>
      <PhoneDisclaimer />
      </div>
    )
  }
}

export default PhoneNumber;
