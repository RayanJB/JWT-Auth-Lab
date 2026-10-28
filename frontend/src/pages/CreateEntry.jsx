import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import api from "../services/api"
import { createNewEntry } from "../services/entryService"
function CreateEntry() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        entryBody: "",
        isPublic: true
    });
    function handleChange(event) {

        const { name, value, type, checked } = event.target

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await createNewEntry(formData)
        navigate("/entries")
    }

    return (
        <div>
            <h1>Create Entry</h1>

            <form onSubmit={handleSubmit}>
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

                <button type="submit">  Create Entry </button>
            </form>
        </div>
    )
}

export default CreateEntry
