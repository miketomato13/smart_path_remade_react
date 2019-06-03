// DobGender.jsx
import React, { Component } from 'react';
import { Select, Button, Grid, Form } from 'semantic-ui-react';

class DobGender extends Component {

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }



render(){
  const monthOptions = [
    {
      key: 'January',
      text: 'January',
      value: 'January',
    },
    {
      key: 'February',
      text: 'February',
      value: 'February',
    },
    {
      key: 'March',
      text: 'March',
      value: 'March',
    },
    {
      key: 'April',
      text: 'April',
      value: 'April',
    },
    {
      key: 'May',
      text: 'May',
      value: 'May',
    },
    {
      key: 'June',
      text: 'June',
      value: 'June',
    },
    {
      key: 'July',
      text: 'July',
      value: 'July',
    },
    {
      key: 'August',
      text: 'August',
      value: 'August',
    },
    {
      key: 'September',
      text: 'September',
      value: 'September',
    },
    {
      key: 'October',
      text: 'October',
      value: 'October',
    },
    {
      key: 'November',
      text: 'November',
      value: 'November',
    },
    {
      key: 'December',
      text: 'December',
      value: 'December',
    },
  ]

  const dayOptions = [
      {
      key: 1,
      text: 1,
      value: 1,
    },
      {
      key: 2,
      text: 2,
      value: 2,
    },
      {
      key: 3,
      text: 3,
      value: 3,
    },
      {
      key: 4,
      text: 4,
      value: 4,
    },
  ]


  const yearOptions = [
      {
      key: 1999,
      text: 1999,
      value: 1999,
    },
  ]

  const { values } = this.props

  return(
    <Form>
      <div>
        <h2 className="ui centered">Confirm Your Date of Birth and Gender To Verify Eligibility</h2>
        <Grid columns='equal'>
        <Grid.Column>
          <Select
            placeholder='Month'
            fluid
            selection
            onChange={this.props.handleChange('dobmonth')}
            defaultValue={values.dobmonth}
            options={monthOptions}
          />
        </Grid.Column>
        <Grid.Column>
          <Select
            placeholder='Day'
            fluid
            selection
            onChange={this.props.handleChange('dobday')}
            defaultValue={values.dobday}
            options={dayOptions}
          />
        </Grid.Column>
        <Grid.Column>
          <Select
            placeholder='Year'
            fluid
            selection
            onChange={this.props.handleChange('dobyear')}
            defaultValue={values.dobyear}
            options={yearOptions}
          />
        </Grid.Column>
        </Grid>
      </div>
      <Button onClick={this.back}>Back</Button>
      <Button onClick={this.saveAndContinue}>Continue</Button>
    </Form>
    )
  }
}


export default DobGender;
