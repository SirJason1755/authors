import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {navigate} from '@reach/router'
import Form from '../components/Form'



const Edit = props => {
    const [name,setName] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => setName(res.data.results.name))
            .catch(err => console.log(err))
    },[])
    const handleSubmit = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, {name})
            .then(res => {
                console.log(res)
                if(res.data.results)
                {
                    navigate("/")
                }
                else{
                    console.log(res.data)
                
                }

    }
    )}
    return(
        <>
        <h1>This is the Edit page</h1>
        <Form name={name} setName={setName} handleSubmit={handleSubmit}/>
        </>
    );
}

export default Edit;