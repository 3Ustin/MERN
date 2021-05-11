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
        e.preventDefault();
        if(username.length < 3){setUserValid(false);}
        else{setUserValid(true);}
        if(password.length < 5){setUserValid(false);}
        else{setPassValid(true);}
        // if(password.length < 8){setPassValid = false;}
        // if(confirmPassword.length < 8){setconPassValid = false;}        
        // if(confirmPassword.toLowerCase() == password.toLowerCase()){setPassMatchValid = false; console.log('here')}
        if(userValid && passValid && conPassValid && passMatchValid){
            
            const newUser = { username, password, confirmPassword };
            console.log("Welcome", newUser);
            setHasBeenSubmitted( true );
        }
        
    };

    const checkValidations = (val) => {
        if(val == 0){
            if(userValid == false){
                return(<h3>The Username is not Valid.</h3>)
            }
        }
        if(val == 1){
            if(passValid == false){
                return(<h3>The Password is not Valid.</h3>)
            }
        }
        if(val ==2){
            if(confirmPassword != password){
                return(<h3>Passwords don't match.</h3>)
            }
        }
    }


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
                    <input type="text" onChange={ (e) => setUsername(e.target.value) }/>
                </div>
                <div>
                    {checkValidations(0)}
                </div>
                <div>
                    <label>Password: </label> 
                    <input type="text" onChange={ (e) => setPassword(e.target.value)} />
                </div>
                <div>
                    {checkValidations(1)}
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)  } />
                </div>
                <div>
                    {checkValidations(2)}
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