import React from 'react'
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router"
import {getAllMyEntries} from "../services/entryService"
import {deleteEntry} from "../services/entryService"
function MyEntries() {

  const [entries, setEntries] = useState(null);


  const {id} = useParams()
    const navigate = useNavigate()

  async function getMyEntries() {
   
      const response = await getAllMyEntries(id);

      console.log("My Entries:", response.data);

      setEntries(response);

    }
  

      async function deleteOneEntry(id){
        const response = await deleteEntry(id)
        navigate('/entries')

    }

    useEffect(()=>{
      getMyEntries() 
    },[])
  return (
    <div>
      <h1>My 1 List</h1>

      { entries ? 
       ( <div key={entries._id}>
          <h3>{entries.title}</h3>
          <p>{entries.entryBody}</p>

          <button onClick={()=>{deleteOneEntry(entries._id)}}>Delete Entry</button>

          
        </div>)
        : <p>Loading...</p>}
    </div>
  )
}

export default MyEntries
