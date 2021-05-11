import React, { Component, useState } from 'react';

const TodoList  = props => {
    const fruits = [{

    }];
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isChecked, setisChecked] = useState(false);

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="checkbox" checked={isChecked} onChange={e => setisChecked(e.target.checked)}/> 
                <span style ={{ textDecoration : isChecked ? 'line-through' : 'none'}}> {props.text} </span>
            </label>
        </form>
    );
};
    
export default TodoList;