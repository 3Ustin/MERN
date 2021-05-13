import React from 'react';
import {Link} from '@reach/router';

const ColorHello = (props) => {
    const {word,backColor,wordColor} = props;
    return(
        <div>
            <div style={{color: backColor, backgroundColor: wordColor}}>{word}</div>
            <Link to='/route-one'>Go to Page one</Link>
        </div>
    );
}

export default ColorHello;