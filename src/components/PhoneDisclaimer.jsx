// PhoneDisclaimer.jsx
import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';


class PhoneDisclaimer extends Component{
    render(){
        return(
          <div>
          <Checkbox
           defaultChecked
           name="phoneCheckbox"
          /> <span> Please check the box to continue. By clicking Continue, I am providing express written consent for tennesseefoodstamps.org and our <a href="#">Marketing Partners</a> to contact me at the number provided above via telephone or text, including through automated means; e.g. automatic telephone dialing system, text and pre-recorded messaging about various products, services and related marketing/telemarketing offers. I understand that message and data rates may apply. I am authorizing these parties to contact me even if my telephone number is currently listed on any state, federal, local or corporate Do Not Call lists and registries. I understand that my consent is not a condition of purchase and no purchase is necessary. If you choose not to continue, you will still receive your free guide by email shortly.</span>
          </div>
        )
    }
}


export default PhoneDisclaimer;
