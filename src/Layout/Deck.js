import React from "react";
import {Link} from "react-router-dom";

function Deck({deck,deleteDeckHandler}){
 return (
    <div className="card" style={{width:"100%"}}>
             <div className="card-body">
                <div className="card-title d-flex flex-row justify-content-between">
                    <h5>{deck.name}</h5>
                    <p>{deck.cards.length} cards</p>
                </div>
                <p className="card-text">{deck.description}</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <Link to={`/decks/${deck.id}`} className="p-2 m-1 btn btn-secondary"><span className="oi oi-eye"></span> View</Link>
                        <Link to={`/decks/${deck.id}/study`} className="p-2 m-1 btn btn-primary"><span className="oi oi-book"></span> Study</Link>
                    </div>
                   <button onClick={()=>deleteDeckHandler(deck.id)} className="btn btn-danger d-flex justify-content-center align-items-center"><span className="oi oi-trash"></span></button>  
                </div>
            </div>
        </div>
 )
}

export default Deck
