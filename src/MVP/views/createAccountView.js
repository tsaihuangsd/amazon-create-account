import React from 'react';
import '../styling/App.css';
import * as Constants from '../constants';

const CreateAccountView = () =>{    
    return (
        <div className="main-container">
            <div className="a-icon-logo" />
            <div className="box-container">
                <div className="create-account-box">
                    <h2>Create account</h2>             
                    <form>
                        <label for="name">Your name</label><br/>
                        <input type="text" id="name"></input><br/>
                        <label>Email</label><br/>
                        <input type="text" id="email"></input><br/>
                        <label>Password</label><br/>
                        <input type="text" id="password"></input><br/>
                        <h5>Passwords must be at least 6 characters.</h5>
                        <label>Re-enter password</label><br/>
                        <input type="text" id="reenter-password"></input><br/>
                        <input type="submit" value="Create your Amazon account"></input>
                    </form>
                    <h5>By creating an account, you agree to Amazon's <a href={Constants.LINK_CONDITION_OF_USE}>Conditions of Use</a> and <a href={Constants.LINK_PRIVACY_NOTICE}>Privacy Notice</a>.
                    </h5>
                </div>
                <div className="sign-in-box">
                    <h5>Already have an account? 
                        <a href={Constants.LINK_SIGN_IN}>Sign-In</a>
                    </h5>
                </div>                    
            </div> 
        </div>
    )
}

export default CreateAccountView;