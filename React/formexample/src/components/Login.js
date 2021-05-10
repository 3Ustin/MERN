import React, { Component, useState } from 'react';

const Login  = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [userValid, setUserValid] = useState(true);
    const [passValid, setPassValid] = useState(true);
    const [conPassValid, setconPassValid] = useState(true);
    const [passMatchValid, setPassMatchValid] = useState(true);

    const createUser = (e) => {
        if(username.length < 5){setUserValid(false);}
        if(password.length < 8){setPassValid = false;}
        if(confirmPassword.length < 8){setconPassValid = false;}        
        if(confirmPassword.toLowerCase() == password.toLowerCase()){setPassMatchValid = false; console.log('here')}
        else{
            e.preventDefault();
            const newUser = { username, password, confirmPassword };
            console.log("Welcome", newUser);
            setHasBeenSubmitted( true );
        }
    };

    const formMessage = () => {
        if( hasBeenSubmitted ){
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return(
        <div>
            <h3>{formMessage}</h3>
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ (e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label> 
                    <input type="text" onChange={ (e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)  } />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h3> {username} </h3>
                <h3> {password} </h3>
                <h3> {confirmPassword} </h3>
            </div>
        </div>
    );
};

export default Login;