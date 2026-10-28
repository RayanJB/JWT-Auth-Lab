import axios from "axios";
import api from "./api";


// all public entries
async function getAllPublicEntries(){
    const response = await api.get("/entries")
    return response.data
}

// createEntry
async function createNewEntry(entryBody){
    const response = await api.post('/entries',entryBody)
    return response.data
}


// myEntries
async function getAllMyEntries(entryId){
    const response = await api.get(`/entries/${entryId}`)
    return response.data
}


//updateEntry
async function updateEntry(entryId, entryData) {
    const response = await api.put(`/entries/${entryId}`, entryData);
    return response.data;
}

//delete
async function deleteEntry(entryId) {
    const response = await api.delete(`/entries/${entryId}`);
    return response.data;
}


export {
    createNewEntry,
    getAllPublicEntries,
    getAllMyEntries,
    updateEntry,
    deleteEntry

}