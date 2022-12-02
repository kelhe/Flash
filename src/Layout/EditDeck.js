import React from "react";
import {Link,useParams} from "react-router-dom"

function EditDeck({handleEditSubmit,handleEditChange,editForm,deck}){
const deckId = useParams().deckId
        return (
        <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
            </ol>
        </nav>    
        <h2>
            Edit Deck
        </h2>
        <form onSubmit={handleEditSubmit} className="d-flex flex-column" id="editForm">
        <label htmlFor="name" className="d-flex flex-column py-3">Name
            <input
            className="my-2"
            type="text"
            id="name"
            name="name"
            placeholder="Deck Name"
            onChange={handleEditChange}
            value={editForm.name}
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
            onChange={handleEditChange}
            value={editForm.description}
            required
            />
        </label>
        <div>
        <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link>
        <button type="submit" className="btn btn-primary mx-1">Submit</button>
        </div>
        </form>
    </div>
    )
}

export default EditDeck