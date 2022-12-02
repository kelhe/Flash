import React from "react";
import {Link} from "react-router-dom";
import { deleteCard } from "../utils/api";

function Card({card,setRender,render}){
    //handler for when delete card button is clicked need a windows confirm and use setrender to rerender without refresh
    const deleteCardHandler = async (idToDel) => { 
        if(window.confirm("Delete this card?\n\n\nYou will not be able to recover it.")){
            await deleteCard(idToDel);
            setRender(!render)
        }
    }


    return (
        <React.Fragment>
        <tr className="d-flex align-items-start justify-content-between p-3">
            <td>{card.front}</td>
            <td className="d-flex flex-column" style={{wordWrap: "breakWord", width:"500px"}}>
                <p>{card.back}</p>
                <div className="d-flex justify-content-end mt-2">
                  <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`} className="btn btn-secondary"><span className="oi oi-pencil"></span> Edit</Link>
                  <button onClick={()=>deleteCardHandler(card.id)} className="btn btn-danger d-flex justify-content-center align-items-center"><span className="oi oi-trash"></span>
</button>  
                </div>
            </td>
        </tr>
        </React.Fragment>
        )
}

export default Card