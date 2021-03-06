import React from 'react';
import ReactDOM from 'react-dom';

import AddCard from './AddCardPopup';

import './AddCardButton.css';

class AddCardButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    }
  handleClick() {
    ReactDOM.render(<AddCard />, document.getElementById('popup'));
  }
  render () {
    return (
      <div>
          <center className="add-button-wrapper">
              <div className="add-button-desc">
                  Add Card or Assign
              </div>
              <i className="glyphicon add-card-button-triangle glyphicon-triangle-bottom"></i>
              <button id="add-button" className="title-add-card" onClick={this.handleClick}>
                  <span className="title-add-text">ADD CARD</span>
                  <img className="title-chevron"
                       src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png" />
              </button>
          </center>
          <div id="popup">
          </div>
      </div>
    )
  }
}

export default AddCardButton;
