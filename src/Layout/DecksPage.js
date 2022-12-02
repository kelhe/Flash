import React, { useState } from "react";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import CreateDeck from "./CreateDeck";
import { createDeck } from "../utils/api";
import DecksIdPage from "./DecksIdPage";

//nested route for paths with /decks 
function DecksPage({ deleteDeckHandler,setRender,render}) {
  const { path } = useRouteMatch();
  //initial form data and state for form to create deck
  const initialForm = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialForm);
  //handler form changes for the create deck form 
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const history = useHistory();
  //submit handler that submits and creates a new deck 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createDeck(formData);
    setFormData(initialForm);
    const newDeckId = response.id;
    setRender(!render);
    history.push(`/decks/${newDeckId}`);
  };

  return (
    <Switch>
      <Route exact path={`${path}/new`}>
        <CreateDeck
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </Route>
      <Route path={`${path}/:deckId`}>
        <DecksIdPage     
            formData={formData}
            deleteDeckHandler={deleteDeckHandler}
            setRender={setRender}
            render={render}
            />
      </Route>
    </Switch>
  );
}

export default DecksPage;
