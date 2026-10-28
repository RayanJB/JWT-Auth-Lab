import { getAllPublicEntries } from "../services/entryService"
import { useState, useEffect } from "react"
import { Link } from "react-router"
function PublicEntries() {
  const [ entries, setEntries ] = useState([])

  async function getEntries(){
    const response = await getAllPublicEntries()
    setEntries(response)
  }
  
  useEffect(()=>{
    getEntries()
  },[])



  return (
    <div>
        <h1>Public Entries</h1>
        {entries.map((oneEntry)=>
         <div key={oneEntry._id}>
            <h2>Title: {oneEntry.title}</h2>
            <Link to={`/entries/${oneEntry._id}`}>See Entry</Link>
        </div>
        )}
    </div>
  )
}

export default PublicEntries