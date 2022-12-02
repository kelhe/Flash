import React from "react";
import Card from "./Card";

function CardList({ deck, setRender, render }) {
  const cards = deck.cards;
  const list = cards.map((card) => (
    <Card key={card.id} card={card} setRender={setRender} render={render} />
  ));
  return (
    <table className="border" style={{ width: "100%" }}>
      <tbody>{list}</tbody>
    </table>
  );
}

export default CardList;
