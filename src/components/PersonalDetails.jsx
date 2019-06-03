// PersonalDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class PersonalDetails extends Component {
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
      <Form color='blue' >
        <h1 className="ui centered">Confirm Your Address to Verify Eligibility</h1>
        <Form.Field>
          <input placeholder='Address'
           onChange={this.props.handleChange('address')}
           defaultValue={values.address}
          />
        </Form.Field>
        <Form.Field>
          <input placeholder='City'
          onChange={this.props.handleChange('city')}
          defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <input placeholder='State'
          onChange={this.props.handleChange('state')}
          defaultValue={values.state}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Continue</Button>
      </Form>
    )
}
}


export default PersonalDetails;
