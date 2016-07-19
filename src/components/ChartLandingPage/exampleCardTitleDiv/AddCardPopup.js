import React from 'react';

import './AddCardPopup.css';

const AddCard = () => {
  return (
    <div className="add-card-container">
        <div className="option-container">
            <div className="add-card-option add-card-color">
                <i className="glyphicon glyphicon-signal"></i>
                <div>Design</div>
            </div>
            <div className="add-card-option add-card-color">
                <i className="glyphicon glyphicon-user"></i>
                <div>Assign</div>
            </div>
        </div>
    </div>
  )
}

export default AddCard;
