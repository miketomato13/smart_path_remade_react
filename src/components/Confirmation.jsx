// Confirmation.jsx
import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render(){
    const {values: { firstName, lastName, email, city, state, dobmonth, dobday, dobyear, phoneNumber }} = this.props;

    return(
      <div>
        <h1 className="ui centered">Confirm your Details</h1>
        <p>Click Confirm if the following details have been correctly entered</p>
        <List>
          <List.Item>
            <List.Icon name='users'/>
            <List.Content>First Name: {firstName}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='users' />
            <List.Content>Last Name: {lastName}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content> <a href='mailto:blah@gmail.com'>{email}</a></List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>{city}, {state}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>{dobmonth}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>{phoneNumber}</List.Content>
          </List.Item>


          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Confirm</Button>
        </List>
      </div>
    )
  }
}

export default Confirmation;
