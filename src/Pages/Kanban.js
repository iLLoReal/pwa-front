import React, {useState} from 'react';
import Card from '../Components/Kanban/Card'

function Kanban() {
    const cards = JSON.parse(window.localStorage.getItem('cards'));
    var items = []
    for (const [index, value] of cards.entries()) {
        items.push(<Card key={index} name={value} />)
      }

    return (
        <div className="listCard">
            {items}
        </div>
    )
}

export default Kanban;

