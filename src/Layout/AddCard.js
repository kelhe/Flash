import React from "react";
import {useParams,useHistory,Link} from "react-router-dom"

function AddCard({ deck, handleCardFormChange, handleCardSubmit, newCard, setRender, render }) {
    const deckId = useParams().deckId
    const history = useHistory()
    const handleDone = () => {
            setRender(!render)
            history.push(`/decks/${deckId}`);
    }
    

  return (
    <div>
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Card</li>
            </ol>
      </nav>
      <h3>{deck.name}: Add Card</h3>
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
            value={newCard.front}
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
            value={newCard.back}
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
    </div>
  );
}

export default AddCard;
