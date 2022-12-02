import React from "react";
import Deck from "./Deck";

function DeckList({decks,deleteDeckHandler}){
    const list = decks.map((deck)=> <Deck key={deck.id} deck={deck} deleteDeckHandler={deleteDeckHandler} />)
    return (<React.Fragment>{list}</React.Fragment>)
}

export default DeckList 