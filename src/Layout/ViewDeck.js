import React from "react";
import {Link, useRouteMatch} from "react-router-dom"
import CardList from "./CardList";


function ViewDeck({deleteDeckHandler,deck, setRender, render}){
    const {url} = useRouteMatch();

    if(deck.cards){
    return (
        <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item" aria-current="page">{deck.name}</li>
            </ol>
        </nav>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className="d-flex">
            <Link to={`${url}/edit`} className="btn btn-primary"><span className="oi oi-pencil"></span>
 Edit</Link>
            <Link to={`${url}/study`} className="btn btn-primary mx-2"><span className="oi oi-book"></span> Study</Link>
            <Link to={`${url}/cards/new`} className="btn btn-primary"><span className="oi oi-plus"></span> Add Cards</Link>
            <button onClick={()=>deleteDeckHandler(deck.id)} className="btn btn-danger ml-auto d-flex justify-content-center align-items-center"><span className="oi oi-trash"></span></button>
        </div>
        <h2 className="mt-4">Cards</h2>
        {!deck.cards.length ? "No cards in this deck. Click add cards to get started!" : <CardList deck={deck} setRender={setRender} render={render}/>}
        </div>
    )}
    return "loading..."
}

export default ViewDeck