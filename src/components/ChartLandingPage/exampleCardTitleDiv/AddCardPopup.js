import React from 'react';
import ReactDOM from 'react-dom';
import ClickOutComponent from 'react-onclickout';

import './AddCardPopup.css';

class AddCard extends ClickOutComponent {

  onClickOut(e) {
    ReactDOM.unmountComponentAtNode(document.getElementById('popup'))
  }


 render() {
  return (
      <div className="add-card-container">
          <div className="option-container">
              <div className="add-card-option add-card-color">
                  <i className="add-card glyphicon glyphicon-signal"></i>
                  <div>Design</div>
              </div>
              <div className="add-card-option add-card-color">
                  <i className="add-card glyphicon glyphicon-user"></i>
                  <div>Assign</div>
              </div>
          </div>
      </div>
  )
  }
}

export default AddCard;
