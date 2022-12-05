import React, { useEffect, useState } from "react";
import { deleteDeck, listDecks } from "../utils/api";
import {Link,Route,Switch, useHistory} from "react-router-dom";
import DeckList from "./DeckList";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksPage from "./DecksPage"

function Layout() {
  const history = useHistory();
  const [decks,setDecks] = useState([]);
  //used to rerender whenever a change is made so we dont have to refresh page to get the new data to display on DOM
  const [render,setRender] = useState(false) 

  useEffect(()=>{
    const abortController = new AbortController();
     async function loadDecks(){
      try {
          const response = await listDecks(abortController.signal);
          setDecks(response)
      } catch(error){
          if(error.name === "AbortError"){
              console.log("aborted")
              setDecks([])
          } else {
              throw error
          }
       }
     }
     loadDecks();

     return () => {
      abortController.abort()
     }
  },[render])

  const deleteDeckHandler = async (deckId) => {
      const abortController = new AbortController();
      if (window.confirm("Delete this deck? \n\n\nYou will not be able to recover it")){
      await deleteDeck(deckId,abortController.signal);
      console.log("deleting")
      const response = await listDecks(abortController.signal);
      setDecks(response);
      history.push("/")
      }
  }


  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
              <Link to="/decks/new" className="p-2 m-1 btn btn-secondary"><span className="oi oi-plus"></span> Create Deck</Link>
              <DeckList decks={decks} deleteDeckHandler={deleteDeckHandler}/>
          </Route>
          <Route path="/decks">
              <DecksPage deleteDeckHandler={deleteDeckHandler} setRender={setRender} render={render}/>
          </Route>   
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
