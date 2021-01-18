import React from 'react';
import '../styling/App.css';
import * as Constants from '../constants';

const CreateAccountView = ({name, email, password, rePassword, handleChange}) =>{    
    return (
        <div className="main-container">
            <div className="a-icon-logo" />
            <div className="box-container">
                <div className="create-account-box">
                    <h2>Create account</h2>             
                    <form>
                        <label>Your name</label><br/>
                        <input type="text" id="name" value={name} onChange={handleChange}></input><br/><br/>
                        <label>Email</label><br/>
                        <input type="text" id="email" value={email} onChange={handleChange}></input><br/><br/>
                        <label>Password</label><br/>
                        <input type="text" id="password" placeholder="At least 6 characters" value={password} onChange={handleChange}></input>
                        <h5 id="passord-requirement">Passwords must be at least 6 characters.</h5><br/>
                        <label>Re-enter password</label><br/>
                        <input type="text" id="reenter-password" value={rePassword} onChange={handleChange}></input><br/><br/>
                        <input type="submit" id="create-account-button" value="Create your Amazon account"></input><br/><br/>
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
            <div className="footer">
                <div className="footer-links">
                    <a href={Constants.LINK_CONDITION_OF_USE}>Conditions of Use</a>
                    <a href={Constants.LINK_PRIVACY_NOTICE}>Privacy Notice</a>
                    <a href={Constants.LINK_HELP}>Help</a>                    
                </div>
                <h6>© 1996-2020, Amazon.com, Inc. or its affiliates</h6>
            </div>
        </div>
    )
}

export default CreateAccountView;