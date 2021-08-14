import React, { useState,useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';//All imports


const Home = props => {
  const [allAuthors, setAllAuthors] = useState([]);
  const [loaded,setLoaded] = useState(false);
  const [r, setR] = useState(true)
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then(res =>{
        console.log("In the Use Effect")
        setAllAuthors(res.data.results)
        setLoaded(true)
      })

      .catch(err => console.log("Error!", err))
  }, [r])


const deleteAuthor = authorId => {
  axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
      .then(res => {
        console.log(res.data.results)
        setR(!r)
      } )
      .catch(err => console.log(err))
  


}




return (
  <div>
    <h1>Favorite authors</h1>
    <br />
    <Link to="/create">Add an author</Link>
    <br />
    <h3>We have quotes by:</h3>


    <div>
      <table>
        <tr>
          <th>Author</th>
          <th>Actions</th>
        </tr>
        {loaded && allAuthors.map((author,index) => 
        <tr key = {index}>
          <td>{author.name}</td> 
          <td><Link to={`/update/${author._id}`}>Edit</Link><br /><button className="btn btn-danger" onClick={() => deleteAuthor(author._id)}>Delete</button></td> 
        </tr>
        )}
        </table>
        
    </div>
  </div>
)


}

export default Home;




