import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Router,Link} from '@reach/router';


const Votes = (props) => {
    const [form, setForm] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/forms/${props.id}`)
            .then(res => {
                //console.log(res);  @@@Console isn't working on Browser??
                setForm(res.data.form);
                //console.log(form);
            })
            .catch(err => console.log(err))
    }, [form])

    const addVote = (option) =>{
        if(option == form.option1){
            axios.put(`http://localhost:8000/api/forms/update/${props.id}`,{option1Vote:form.option1Vote + 1})
            .then(res => {
                //console.log(res);  @@@Console isn't working on Browser??
                setForm(res.data.form);
                //console.log(form);
            });
        }
        else{
            axios.put(`http://localhost:8000/api/forms/update/${props.id}`,{option2Vote:form.option2Vote + 1})
            .then(res => {
                //console.log(res);  @@@Console isn't working on Browser??
                setForm(res.data.form);
                //console.log(form);
            });
        }
    }

    return(
        <div>
            <Link to='/'>Home</Link>
            <h1>Form all laid out.</h1>
            <h2>{form.option1}</h2>
            <h4 >{form.option1Vote}</h4>
            <h2>{form.option2}</h2>
            <h4 >{form.option2Vote}</h4>
        </div>
    );
}
export default Votes;