import React from 'react';
import ReactDOM from 'react-dom';

import OptionPopup from './OptionPopup';

import './titlePageOptionsButton.css';

class OptionButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    }
  handleClick() {
    ReactDOM.render(<OptionPopup />, document.getElementById('pop'));
  }
  render () {
    return (
      <div>
        <center className="page-options-wrapper">
            <div className="page-options-button-desc">
                Page Options
            </div>
            <i className="glyphicon page-options-button-triangle glyphicon-triangle-bottom"></i>
            <button id="title-page-options" className="title-page-options" onClick={this.handleClick}>
                <img className="title-wrench" src="http://www.iconpng.com/png/windows-8-metro-invert/configure_alt_2.png" />
                <img className="title-chevron2" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png" />
            </button>
        </center>
            <div id="pop">
            </div>
      </div>
    )
  }
}

export default OptionButton;
