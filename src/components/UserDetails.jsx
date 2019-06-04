// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Disclaimer from './Disclaimer'

class UserDetails extends Component {

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render(){
    const { values } = this.props;
    return(
      <div>
      <Form >
        <h2 className="ui centered">Find out if you are Eligible for the Food Stamps Program with our Guide by Completing your information below.</h2>
        <Form.Field>
          <input
          placeholder='First Name'
          onChange={this.props.handleChange('firstName')}
          defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <input
          placeholder='Last Name'
          onChange={this.props.handleChange('lastName')}
          defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.Field>
          <input
          placeholder='Email Address'
          onChange={this.props.handleChange('email')}
          defaultValue={values.email}
          />
        </Form.Field>
        <Form.Field>
          <input
          placeholder='Zip'
          onChange={this.props.handleChange('zip')}
          defaultValue={values.zip}
          />
        </Form.Field>
        <Button disabled={!values.firstName || !values.lastName || !values.email || !values.zip}
        onClick={this.saveAndContinue}>Continue >></Button>
      </Form>
      <Disclaimer />
      </div>
    )
  }
}

export default UserDetails;
