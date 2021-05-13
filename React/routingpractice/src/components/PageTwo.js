import React from 'react';
import {Link} from '@reach/router';

const PageTwo = (props) => {
    return(
        <div>
            you are in Page two
            <Link to='/route-number/4'>Go to Page 4</Link>
        </div>
    );
}

export default PageTwo;