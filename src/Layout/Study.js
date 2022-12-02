import React from "react";
import {useRouteMatch, useParams, Switch, Route, Link} from "react-router-dom"
import StudyCard from "./StudyCard";

function Study({deck}){
    const deckId = useParams().deckId
    const {path} = useRouteMatch()
    
    return (
        <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
        </nav>
        <h1>{deck.name}: Study</h1>
        <Switch>
            <Route exact path={path}>
                <StudyCard deck={deck} />
            </Route>
        </Switch>
        </div>
    )
    }


export default Study