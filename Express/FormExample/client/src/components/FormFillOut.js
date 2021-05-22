import React, {useEffect, useState} from 'react';
import {Router,Link} from '@reach/router';
import axios from 'axios';


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

    const handleSubmit = () => {

    }

    return(
        <div>
            <h1>Forms To Fill Out</h1>
            <form name='newForm' onSubmit={handleSubmit()}>
                Question: <input type='text' name='question'/>
                Option One: <input type='text' name='option1'/>
                Option Two: <input type='text' name='option2'/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );
}
export default Main