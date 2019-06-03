// DobGender.jsx
import React, { Component } from 'react';
import { Dropdown, Button, Grid, Form } from 'semantic-ui-react';

class DobGender extends Component {

  saveAndContinue = (e) => {
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }



render(){
  const { values } = this.props

  return(
    <Form>
      <div>
        <h2 className="ui centered">Confirm Your Date of Birth and Gender To Verify Eligibility</h2>
        <Grid columns='equal'>
        <Grid.Column>
          <select defaultValue={values.dobmonth} onChange={this.props.handleChange('dobmonth')}>
            <option value="" disabled>Month</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
          </select>
        </Grid.Column>
        <Grid.Column>
          <select defaultValue={values.dobmonth} onChange={this.props.handleChange('dobday')}>
            <option value="" disabled>Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </Grid.Column>
        <Grid.Column>
          <select defaultValue={values.dobmonth} onChange={this.props.handleChange('dobyear')}>
            <option value="" disabled>Year</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
          </select><br/>
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
