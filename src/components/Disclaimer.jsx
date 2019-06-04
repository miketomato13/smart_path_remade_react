// Disclaimer.jsx
import React, { Component } from 'react';

class Disclaimer extends Component{
    render(){
        return(
            <div>
                <h6 className="ui centered">By clicking continue I agree to the <a href="/privacy">Privacy Policy</a> and <a href="/tc">Terms and Conditions</a>.</h6>
            </div>
        )
    }
}

export default Disclaimer;
