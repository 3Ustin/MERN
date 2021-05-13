import React from 'react';
import {Link} from '@reach/router';

const NumberRoute = (props) => {
    return(
        <div>
            you are on page {props.num}
            <Link to='/hello/red/blue'>Go to ColorHello</Link>
        </div>
    );
}

export default NumberRoute;