import React,{useEffect} from "react";
import {Link,useParams} from "react-router-dom"
import CardForm from "./CardForm";

function EditCard({deck, setCardToEdit, handleCardFormChange, cardForm, handleCardSubmit,edit}){
    const {cardId,deckId} = useParams()
    
    useEffect(()=>{
        setCardToEdit(cardId)
    },[cardId,setCardToEdit])
    
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
          <CardForm handleCardFormChange={handleCardFormChange} handleCardSubmit={handleCardSubmit} cardForm={cardForm} edit={edit} />
        </div>
      );
}

export default EditCard