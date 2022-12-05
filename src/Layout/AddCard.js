import React from "react";
import {useParams,useHistory,Link} from "react-router-dom"
import CardForm from "./CardForm";

function AddCard({ deck, handleCardFormChange, handleCardSubmit, cardForm, setRender, render }) {
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
      <CardForm handleCardFormChange={handleCardFormChange} handleCardSubmit={handleCardSubmit} cardForm={cardForm} handleDone={handleDone} />
    </div>
  );
}

export default AddCard;
