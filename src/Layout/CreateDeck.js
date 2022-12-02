import React from "react";
import {Link} from "react-router-dom"


function CreateDeck({handleChange,handleSubmit,formData}){
    
    return (
        <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
        <h1>Create Deck</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column" id="createForm">
            <label htmlFor="name" className="d-flex flex-column py-3">Name
                <input
                className="my-2"
                type="text"
                id="name"
                name="name"
                placeholder="Deck Name"
                onChange={handleChange}
                value={formData.name}
                required
                />
            </label>
            <label htmlFor="description" className="d-flex flex-column">Description
                <textarea
                className="my-2"
                id="description"
                name="description"
                placeholder="Brief description of the deck"
                rows={5}
                onChange={handleChange}
                value={formData.description}
                required
                />
            </label>
            <div>
            <Link to="/" className="btn btn-secondary">Cancel</Link>
            <button type="submit"className="btn btn-primary mx-1">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default CreateDeck