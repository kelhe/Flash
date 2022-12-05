import React, { useState, useEffect } from "react";
import {Switch, Route, useHistory, useParams, useRouteMatch} from "react-router-dom";
import Study from "./Study";
import ViewDeck from "./ViewDeck";
import EditDeck from "./EditDeck";
import { readDeck,updateDeck } from "../utils/api";
import CardsPage from "./CardsPage";

//nested route for paths with deckId
function DecksIdPage({deleteDeckHandler,setRender,render}){
  const { path } = useRouteMatch();
  const [deck, setDeck] = useState({});
  const deckId = useParams().deckId;
  //edit form state
  const emptyEditForm = {
    name: "",
    description: "",
    cards: [],
  }
  const [editForm,setEditForm] = useState(emptyEditForm)

  //effect hook to load the deck we are at and use useparams to get the deckid to load 
  useEffect(() => {
    setDeck({});
    const abortController = new AbortController();
    async function loadDeck() {
      try {
        const response = await readDeck(deckId, abortController.signal);
        setDeck(response);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("aborted");
        } else {
          throw error;
        }
      }
    }

    loadDeck();

    return () => {
      abortController.abort();
    };
}, [render,deckId]);

//Effect hook so every time deck changes we will change the edit form data
useEffect(()=>{
    //if deck exists then set the initial edit form to the deck data 
    if(deck.name){
        setEditForm(deck)
    }
},[deck])
//handlers for edit form for deck
const handleEditChange = ({ target }) => {
    setEditForm({
        ...editForm,
        [target.name]: target.value,
    });
};
const history = useHistory();
const handleEditSubmit = async (event) => {
  event.preventDefault();
  const response = await updateDeck(editForm);
  const editedDeckId = response.id;
  setRender(!render)
  history.push(`/decks/${editedDeckId}`);
};
    
if(deck.name){
  return (
    <Switch>
      <Route path={`${path}/study`}>
        <Study deck={deck} />
      </Route>
      <Route path={`${path}/edit`}>
        <EditDeck
          deck={deck}
          handleEditChange={handleEditChange}
          editForm={editForm}
          handleEditSubmit={handleEditSubmit}
          />
      </Route>
      <Route path={`${path}/cards`}>
          <CardsPage 
          deck={deck}
          setRender={setRender}
          render={render}
          />
      </Route>
      <Route path={`${path}`}>
        <ViewDeck deleteDeckHandler={deleteDeckHandler} deck={deck} setRender={setRender} render={render}/>
      </Route>
    </Switch>
  );
}
return "loading..."
}

export default DecksIdPage;
