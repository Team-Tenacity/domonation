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
              <div id="add-card-option" className="add-card-option add-card-color">
                  <div className="build-new-desc">
                      <p>Build a New Card</p>
                      <i className="glyphicon add-card-option-triangle glyphicon-triangle-bottom"></i>
                  </div>
                  <i className="add-card glyphicon glyphicon-signal"></i>
                  <div>Design</div>
              </div>
              <div id="assign-card-option" className="add-card-option add-card-color">
                  <div className="assign-build-new-desc">
                      <p className="build-new-text">Assign Someone to Build a New Card</p>
                      <i className="glyphicon assign-build-triangle glyphicon-triangle-bottom"></i>
                  </div>
                  <i className="add-card glyphicon glyphicon-user"></i>
                  <div>Assign</div>
              </div>
          </div>
      </div>
  )
  }
}

export default AddCard;
