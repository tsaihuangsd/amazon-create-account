import React from 'react';
import '../styling/App.css';
import * as Constants from '../constants';

const CreateAccountView = ({state, handleChange, handleSubmit}) =>{   

    const WarningBlock =() =>{
        console.log("state.warning: ", state.warning)
        switch (state.warning){
            case "password-mismatch":
                return (<div id="password-mismatch">
                            <img id="warning-img" alt="warning"/>
                            <div className="warning-text-container">
                                <h4>There was a problem</h4>
                                <h6>Passwords must match</h6>
                            </div>
                        </div>)
            case "password-short":
                return (<div id="password-short">
                            <img id="warning-img" alt="warning"/>
                            <div className="warning-text-container">
                                <h4>There was a problem</h4>
                                <h6>Passwords must be at least 6 characters</h6>
                            </div>
                </div>)
            case "email-invalid":
                return (<div id="email-invalid">
                            <img id="warning-img" alt="warning"/>
                            <div className="warning-text-container">
                                <h4>There was a problem</h4>
                                <h6>Email must be a valid address</h6>
                            </div>   
                        </div>)
            default:
                return (<div style={{display:'none'}}>hello</div>)
        }
    }
    return (
        <div className="main-container">
            <div className="a-icon-logo" style={{backgroundImage: 'url(' + Constants.LINK_AMAZON_LOGO + ')'}} />
            <WarningBlock />
            <div className="box-container">
                <div className="create-account-box">
                    <h2>Create account</h2>             
                    <form onSubmit={handleSubmit}>
                        <label>Your name</label><br/>
                        <input type="text" id="name" value={state.name} onChange={handleChange}></input><br/><br/>
                        <label>Email</label><br/>
                        <input type="text" id="email" value={state.email} onChange={handleChange}></input><br/><br/>
                        <label>Password</label><br/>
                        <input type="text" id="password" placeholder="At least 6 characters" value={state.password} onChange={handleChange}></input>
                        <h5 id="passord-requirement">Passwords must be at least 6 characters.</h5><br/>
                        <label>Re-enter password</label><br/>
                        <input type="text" id="rePassword" value={state.rePassword} onChange={handleChange}></input><br/><br/>
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