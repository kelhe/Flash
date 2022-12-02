import React, {useState} from "react";
import { useHistory,Link, useParams } from "react-router-dom";

function StudyCard({deck}){
    const cards = deck.cards;
    const deckId = useParams().deckId;
    const [cardNumber,setCardNumber] = useState(0);
    const [front,setFront] = useState(true);
    const history = useHistory();
    //find the current card using the index and current card number state
    const currentCard = cards.find((card,idx)=> idx === cardNumber)
    //create a flip handler that sets the front state to false which will display the back
    const handleFlip = () => setFront(!front)
    //create next handler that sets the card number state to the next index and resets front to true to display the front
    const handleNext = () => {
        setCardNumber(cardNumber + 1);
        setFront(true);
    }
    //effect hook so that when the card number reaches the length the window confirm to restart appears 
    const handleRestart = () => {
            if(window.confirm("Restart cards?\n\n\nClick 'cancel' to return to the home page")){
                console.log(cardNumber);
                setCardNumber(0);
                setFront(true);
            } else{
                history.push("/")
            }
        } 
    
    
    if(cards.length > 2){
        //helper function to determine which buttons to render if front or back of the card
        const frontOrBack = (front) => {
            if(front){
                return (<button onClick={handleFlip} className="btn btn-secondary mr-1">Flip</button>)
            } 
            return (
            <div className="d-flex">
                <button onClick={handleFlip} className="btn btn-secondary mr-1">Flip</button>
                <button onClick={(cardNumber + 1) === cards.length ? handleRestart : handleNext} className="btn btn-primary">Next</button>
            </div>)
        }
    return (
        <div className="card" style={{width:"100%"}}>
            <div className="card-body">
                <div className="card-title">
                    <h5>Card {`${cardNumber + 1}`} of {cards.length}</h5>
                </div>
                <p className="card-text">{front ? currentCard.front : currentCard.back}</p>
                {frontOrBack(front)}
            </div>
        </div>
     )
    }
    return (
        <div>
            <h2>Not Enough Cards.</h2>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
            <Link to={`/decks/${deckId}/cards/new`} className="px-3 btn btn-primary">Add Cards</Link>
        </div>
    )
}

export default StudyCard