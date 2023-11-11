// Card.js

import React from 'react';
import './card.css';
import MoreHorizontal from '../../assets/icons/more-horizontal (1).svg';

const Card = ({ data }) => {
    const { id, title, status, tag, userId } = data;

    return (
        <div className='card'>
            <div className="card_row1">
                <label className='card_label'>{id}</label>
                <div className="profile">
                    <img
                        src="https://thumbs.dreamstime.com/b/man-icon-profile-member-user-perconal-symbol-vector-white-isolated-background-169942439.jpg"
                        className="card_profile"
                        alt=""
                    />
                    <div className='active_circle'></div>
                </div>
            </div>
            <div className="card_row2">
                <p>{title}</p>
            </div>
            <div className="card_row3">
                <img src={MoreHorizontal} alt="" />
                <label>{tag}</label>
            </div>
        </div>
    );
}

export default Card;
