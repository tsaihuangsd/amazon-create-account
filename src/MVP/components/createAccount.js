import React, {useState} from 'react';

import CreateAccountView from '../views/createAccountView';

const CreateAccount = () =>{
    const [state, setState] = useState({
        name:"", email:"", password:"", rePassword:"", warning:""
    });

    const handleChange=(e)=>{
        setState({...state,
                [e.target.id]: e.target.value.trim()});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Determine which type of error does the input data contain, if any
        if (state.password ===""){
            setState({...state,
                warning: "missing-password"})
        }
        else if (state.email ===""){
            setState({...state,
                warning: "missing-email"})
        }
        else if (state.name ===""){
            setState({...state,
                warning: "missing-name"})
        }
        else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(state.email).toLowerCase())){    //check if entered a proper email address
            setState({...state,
                warning: "email-invalid"})
        }
        else if (state.password.length <6){
            setState({...state,
                warning: "password-short"})
        }
        else if (state.password !== state.rePassword){
            setState({...state,
                    warning: "password-mismatch"})
        }
        else{
            setState({...state,
                warning: ""})
        }
        console.log("Submitted: ", state);
    }

    return (
        <CreateAccountView
            state={state} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}/>
    );
}

export default CreateAccount;