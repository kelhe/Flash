import React,{useEffect} from "react";
import {Link,useParams} from "react-router-dom"

function EditCard({deck, setCardToEdit, handleCardEditChange, editCardForm, handleCardSubmit}){
    const {cardId,deckId} = useParams()
    
    useEffect(()=>{
        setCardToEdit(cardId)
    },[])
    
    return (
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
            </ol>
        </nav>
          <h2>Edit Card</h2>
          <form
            onSubmit={handleCardSubmit}
            className="d-flex flex-column"
            id="edit"
          >
            <label htmlFor="front" className="d-flex flex-column py-3">
              Front
              <textarea
                className="my-2"
                id="front"
                name="front"
                placeholder="Front side of card"
                rows={3}
                onChange={handleCardEditChange}
                value={editCardForm.front}
                required
              />
            </label>
            <label htmlFor="back" className="d-flex flex-column">
              Back
              <textarea
                className="my-2"
                id="back"
                name="back"
                placeholder="Back side of card"
                rows={3}
                onChange={handleCardEditChange}
                value={editCardForm.back}
                required
              />
            </label>
            <div>
              <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link>
              <button type="submit" className="btn btn-primary mx-1">Submit</button>
            </div>
          </form>
        </div>
      );
}

export default EditCard