import React, {useState} from 'react';

import CreateAccountView from '../views/createAccountView';

const CreateAccount = () =>{
    const [state, setState] = useState({
        name:"", email:"", password:"", rePassword:""
    });

    const handleChange=(e)=>{
        setState({...state,
                [e.target.id]: e.target.value.trim()});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
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