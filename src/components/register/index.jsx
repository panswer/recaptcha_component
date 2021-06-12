import React,{ useState } from "react";

import { handleChange } from './logic/handleInput';
import Recaptcha from 'react-google-invisible-recaptcha';

let recaptcha={};

let data = {
    email:'',
    password:''
};

function Register(props) {
    let [state,setState]=useState({
        email:'',
        password:''
    });

    function getBoth(token) {
        console.log(data);
        console.log(token);
    }

    return (
        <div className="register_div">
            <input
                type="email"
                name="register_email"   
                id="register_email" 
                className="register_email"
                onChange={e=>{
                    handleChange(e,state,setState);
                    data.email=e.target.value;
                }}
            />
            <input
                type="password"
                name="register_password"
                id="register_passwrod" className="register_password"
                onChange={e=>{
                    handleChange(e,state,setState);
                    data.password=e.target.value;
                }}
            />
            <button onClick={async e=>{
                e.preventDefault();
                recaptcha.execute();
            }}>Send</button>
            <Recaptcha
              ref={ ref =>{
                  recaptcha=ref;
              }}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onResolved={()=>{
                  getBoth(recaptcha.getResponse());
                  recaptcha.reset();
              }}
            />
        </div>
    );
}

export default Register;