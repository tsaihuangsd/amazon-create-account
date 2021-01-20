import React from 'react';
import '../styling/App.css';
import * as Constants from '../constants';

const CreateAccountView = ({state, handleChange, handleSubmit}) =>{   
    //Warning block above the create account box
    const WarningBlock =() =>{
        let warningHeading = "There was a problem";
        let warningContent ="";
        let warningColor = "";
        let warningImgBkgdPosition = "";
        switch (state.warning){
            case "password-mismatch":
                warningContent = "Passwords must match";
                warningColor = "#d33";
                warningImgBkgdPosition = "-248px -35px";
                break;
            case "password-short":
                warningContent = "Passwords must be at least 6 characters";
                warningColor = "orange";
                warningImgBkgdPosition = "-282px -35px";
                break;
            case "email-invalid":
                warningContent="Email must be a valid address";
                warningColor = "orange";
                warningImgBkgdPosition = "-282px -35px";
                break;
            case "missing-name": case "missing-email": case "missing-password":
                warningContent=`Enter your ${state.warning.substr(8)}`;
                warningColor = "#d33";
                warningImgBkgdPosition = "-248px -35px";
                break;
            default:
                warningContent="Internal Error. Please try again later.";
                warningColor = "#d33";
                warningImgBkgdPosition = "-248px -35px";
                break;

        }
        return (state.warning !== "")   //return warning block if any warning exists
                ? (<div className="warning-block" 
                        style={{borderColor:`${warningColor}`}}>
                        <div id="warning-img" 
                            style={{backgroundPosition:`${warningImgBkgdPosition}`}} 
                        />
                        <div className="warning-text-container">
                            <h4 style={{color:`${warningColor}`, margin: "10px"}}>{warningHeading}</h4>
                            <h6 style={{margin: "10px"}}>{warningContent}</h6>
                        </div>
                    </div>)
                : null
    }
    return (
        <div className="main-container">
            <div className="a-icon-logo" />
            <WarningBlock />
            <div className="box-container">
                <div className="create-account-box">
                    <h1>Create account</h1><br/>           
                    <form onSubmit={handleSubmit}>
                        <label>Your name</label><br/>
                        <input type="text" id="name" value={state.name} onChange={handleChange}></input><br/><br/>
                        <label>Email</label><br/>
                        <input type="text" id="email" value={state.email} onChange={handleChange}></input><br/><br/>
                        <label>Password</label><br/>
                        <input type="text" id="password" placeholder="At least 6 characters" value={state.password} onChange={handleChange}></input><br />
                        <div className="password-requirement-container">
                        <i className="a-icon-alert"></i>
                        <div id="passord-requirement">Passwords must be at least 6 characters.</div>
                        </div><br/>
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
                </div><br />
                <h6>© 1996-2020, Amazon.com, Inc. or its affiliates</h6>
            </div>
        </div>
    )
}

export default CreateAccountView;