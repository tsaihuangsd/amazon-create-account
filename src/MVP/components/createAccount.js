import React, {useState} from 'react';

import CreateAccountView from '../views/createAccountView';

const CreateAccount = () =>{
    const [state, setState] = useState({
        name:"", email:"", password:"", rePassword:""
    });

    const handleChange=(e)=>{
        setState({[e.target.id]: e.target.value});
        console.log(e.target.id, ": ", e.target.value)
    }

    return (
        <CreateAccountView 
            name={state.name} 
            email={state.email} 
            password={state.password} 
            rePassword={state.rePassword} 
            handleChange={handleChange}/>
    );
}

export default CreateAccount;