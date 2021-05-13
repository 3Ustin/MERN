import React from 'react';
import {Link} from '@reach/router';

const PageOne = (props) => {
    return(
        <div>
            you are in Page one
            <Link to='/route-two'>Go to Page Two</Link>
        </div>
    );
}

export default PageOne;