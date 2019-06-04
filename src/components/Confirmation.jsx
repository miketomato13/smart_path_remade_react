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
    const {values: { firstName, lastName, email, city, state, dobmonth, phoneNumber }} = this.props;

    return(
      <div>
        <h1 className="ui centered">test</h1>
        <p>mimicing passing props to an api</p>
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
