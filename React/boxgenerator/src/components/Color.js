import React, { Component, useState } from 'react';

const Login  = props => {
    const [color, setColor] = useState("");
    const [arr, setArr] = useState([]);

    const insertBox = (e) => {
        e.preventDefault();
        setArr([...arr,<div  style = {{backgroundColor:color,height:'200px', width:'200px'}}>{color}</div>]);
    };



    return(
        <div>
            <form onSubmit={ insertBox }>
                <div>
                    <label>Input Color: </label> 
                    <input type="text" onChange={ (e) => setColor(e.target.value) }/>
                </div>
            </form>
            <div style= {{display:'flex', width:'100%'}}>
                {
                arr.map((box,i) => <div key = {i}>{box}</div>)
                }
            </div>

        </div>
    );
};

export default Login;