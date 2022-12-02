import React, {useState,useEffect} from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { createCard, readCard, updateCard } from "../utils/api";
import AddCard from "./AddCard";
import EditCard from "./EditCard";

function CardsPage({ deck, setRender, render}) {
  const { path } = useRouteMatch();
  const history = useHistory();
  const initialCardForm = {
    front: "",
    back: "",
    deckId: deck.id,
};

const [newCard, setNewCard] = useState(initialCardForm);
const [editCardForm,setEditCardForm] = useState(initialCardForm);
const [cardToEdit,setCardToEdit] = useState(0);
const [card,setCard] = useState({})
//effect hook to load the card we want to edit 

useEffect(() => {
  setCard({});
  const abortController = new AbortController();
  if(cardToEdit){
    async function loadCard() {
      try {
        const response = await readCard(cardToEdit, abortController.signal);
        setCard(response);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("aborted");
        } else {
          throw error;
        }
      }
    }
    loadCard();
  }

  return () => {
    abortController.abort();
  };
}, [cardToEdit,render]);

//effect hook to change the edit card form to the current card data we are editing
useEffect(()=>{
  //if deck exists then set the initial edit form to the deck data 
  if(card.id){
      setEditCardForm(card)
  }
},[card])

//handlers for the new card form will pass as props to addcard component
const handleCardFormChange = ({ target }) => {
  setNewCard({
    ...newCard,
    [target.name]: target.value,
  });
};

const handleCardSubmit = async (event) => {
  event.preventDefault();
  if(event.target.id === "edit"){
    await updateCard(editCardForm);
    setEditCardForm(initialCardForm);
    setRender(!render)
    history.push(`/decks/${deck.id}`);
  } else {
    await createCard(deck.id, newCard);
    setNewCard(initialCardForm);
  }
};

//handlers for card edit 
const handleCardEditChange = ({ target }) => {
  setEditCardForm({
      ...editCardForm,
      [target.name]: target.value,
  })
};



  //edit card handlers

  return (
    <Switch>
      <Route exact path={`${path}/new`}>
        <AddCard
          deck={deck}
          handleCardFormChange={handleCardFormChange}
          handleCardSubmit={handleCardSubmit}
          newCard={newCard}
          setRender={setRender}
          render={render}
        />
      </Route>
      <Route path={`${path}/:cardId/edit`}>
        <EditCard 
          deck={deck}
          setCardToEdit={setCardToEdit} 
          handleCardEditChange={handleCardEditChange} 
          editCardForm={editCardForm} 
          handleCardSubmit={handleCardSubmit}/>
      </Route>
    </Switch>
  );
}

export default CardsPage;
