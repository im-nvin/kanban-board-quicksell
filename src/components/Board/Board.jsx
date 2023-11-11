// Board.js

import React from 'react';
import './board.css';
import MoreHorizontal from '../../assets/icons/more-horizontal (1).svg';
import Plus from '../../assets/icons/plus.svg';
import Card from '../card/Card';

const Board = ({ icon, name, boardData }) => {
  // Filter the tickets based on the status of the board
  const filteredTickets = Array.isArray(boardData.tickets)
    ? boardData.tickets.filter((ticket) => ticket.status.toLowerCase() === name.toLowerCase())
    : [];

  console.log(`filteredTickets for ${name}:`, filteredTickets);
  return (
    <div className='Board'>
      <div className="board_top">
        <img src={icon} alt="" className='board_top_icon' />
        <p className="board_top_title">{name}&nbsp;<span>{filteredTickets.length}</span></p>
        <img src={Plus} alt="" className='icons' />
        <img src={MoreHorizontal} alt="" className='icons' />
      </div>
      <div className="board_card">
        {Array.isArray(filteredTickets) && filteredTickets.length > 0 ? (
          filteredTickets.map((cardData) => (
            <Card key={cardData.id} data={cardData} />
          ))
        ) : (
          console.log("no cards for done")
        )}
      </div>
    </div>
  );
}

export default Board;
