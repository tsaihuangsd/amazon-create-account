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
        // (state.password !== state.rePassword)
        //     ? setState({...state,
        //             warning: "password-mismatch"})
        //     : setState({...state,
        //         warning: ""})
        
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