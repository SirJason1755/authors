
import {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form = props => {
const {handleSubmit, name, setName} = props;
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor = "name">Name</label>
                <input type ="text" onChange={(e) => setName(e.target.value)} value ={name}className="form-control"/>
            </div>
            <input type="submit" value="submit" /> 
        </form>

    );
}

export default Form;