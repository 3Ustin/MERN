import React, { Component, useState } from 'react';

const PersonCard  = props => {
    const [count, setState] = useState(0);

    const addToAge = () => {
        setState(count + 1);
    }
    
    return(
        <div>
            <p>Age: {count}</p>
            <button onClick={addToAge}>Press when Birthday day is near</button>
        </div>
    );
}
export default PersonCard;