import React from "react";
import Recaptcha from 'react-google-invisible-recaptcha';

class Login extends React.Component{
    constructor( props ) {
        super( props );
        this.state = { value: '' };
        this.onSubmit = this.onSubmit.bind( this );
      }
      render() {
        return (
          <div>
            <input
              type="text"
              value={ this.state.value }
              onChange={ event => this.setState( { value: event.target.value } ) } 
              minLength='5'
            />
            <button onClick={ this.onSubmit }>Submit</button>
            <Recaptcha
              ref={ ref => this.recaptcha = ref }
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onResolved={()=>console.log(this.recaptcha.getResponse())} />
          </div>
        );
      }

      onSubmit() {
        if ( '' === this.state.value ) {
          alert( 'Validation failed! Input cannot be empty.' );
          this.recaptcha.reset();
        } else {
          this.recaptcha.execute();
        }
      }
}

export default Login;