import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {navigate} from '@reach/router'
import Form from '../components/Form'


const Add = props => {
    const [name,setName] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {name})
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
        <h1>This is the add page</h1>
        <Form name={name} setName={setName} handleSubmit={handleSubmit}/>
        </>
    );
}

export default Add;