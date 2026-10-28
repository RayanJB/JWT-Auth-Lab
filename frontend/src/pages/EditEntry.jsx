import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router"

import { updateEntry } from "../services/entryService"
function EditEntry() {


    const [formData, setFormData] = useState({
        title: "",
        entryBody: "",
        isPublic: true
    })
    const { entryId } = useParams()


    async function updateEntries() {
        const response = await updateEntry()
        setFormData(response)
    }

    useEffect(() => {
        updateEntries()
    }, [])

    const navigate = useNavigate()
    function handleChange(event) {

        const { name, value, type, checked } = event.target

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await updateEntry()
        navigate("/entries" + response.data._id)
    }

return (
    <div>
        <h1>Update Entry</h1>

        <form onSubmit={(handleSubmit)}>
            <label> Title: </label>

            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />

            <label> Entry Body: </label>

            <input
                type="text"
                name="entryBody"
                value={formData.entryBody}
                onChange={handleChange}
            />

            <label>
                <input
                    type="checkbox"
                    name="isPublic"
                    checked={formData.isPublic}
                    onChange={handleChange}
                /> Public
            </label>

            <button type="submit">  Update Entry </button>
        </form>
    </div>
)
}

export default EditEntry

