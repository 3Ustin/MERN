import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Router,Link} from '@reach/router';


const Main = (props) => {
    const [form, setForm] = useState([]);
    const [formArr, setFormArr] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/forms')
            .then(res => {
                setForm(res.data.form)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [form])



    return(
        <div>
            <h1>Forms To Fill Out</h1>
            <Link to='/fillout'>Make New Pop Quiz Bruh</Link>
            <div className ='boxes'>
                {
                loaded && form.map((item,i) => <Link to={`/review/${item._id}`} key={i}
                className='box'>
                {item.question}</Link>)
                }
            </div>
        </div>
    );
}
export default Main