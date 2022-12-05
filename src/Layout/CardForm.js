import React from "react";
import {useParams,Link} from "react-router-dom"

function CardForm({handleCardFormChange,cardForm, handleCardSubmit, edit, handleDone}){
    const deckId = useParams().deckId
if(edit){
    return (
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
                onChange={handleCardFormChange}
                value={cardForm.front}
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
                onChange={handleCardFormChange}
                value={cardForm.back}
                required
                />
            </label>
            <div>
              <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link>
              <button type="submit" className="btn btn-primary mx-1">Submit</button>
            </div>
          </form>
    )
} 
return (
    <form
        onSubmit={handleCardSubmit}
        className="d-flex flex-column"
        id="createForm"
      >
        <label htmlFor="front" className="d-flex flex-column py-3">
          Front
          <textarea
            className="my-2"
            id="front"
            name="front"
            placeholder="Front side of card"
            rows={3}
            onChange={handleCardFormChange}
            value={cardForm.front}
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
            onChange={handleCardFormChange}
            value={cardForm.back}
            required
          />
        </label>
        <div>
          <button onClick={handleDone} className="btn btn-secondary" id="done">
            Done
          </button>
          <button type="submit" className="btn btn-primary mx-1">Save</button>
        </div>
      </form>
)
}

export default CardForm