import React, {useState} from 'react';
import Card from '../Components/Kanban/Card'
import style from './Kanban.module.css';

function Kanban() {
    const cards = JSON.parse(window.localStorage.getItem('cards'));
    var items = []
    for (const [index, value] of cards.entries()) {
        items.push(<Card key={index} name={value} />)
    }

    return (
        <div style={{display: 'block'}}>
            <ul className={style.lists}>
                {items}
            </ul>
        </div>
    )
}

export default Kanban;

