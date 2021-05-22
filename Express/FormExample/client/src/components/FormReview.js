import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Router,Link} from '@reach/router';


const FormReview = (props) => {
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
            <h1>Form all laid out.</h1>
            <Link to={`/votes/${form._id}`} onClick = {addVote(form.option1)}>{form.option1}</Link>
            <Link to={`/votes/${form._id}`} onClick = {addVote(form.option2)}>{form.option2}</Link>
        </div>
    );
}
export default FormReview