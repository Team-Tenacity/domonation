import React from 'react';
import ReactDOM from 'react-dom';
import ClickOutComponent from 'react-onclickout';

import './OptionPopup.css';

class OptionPopup extends ClickOutComponent {

  onClickOut(e) {
    ReactDOM.unmountComponentAtNode(document.getElementById('pop'))
  }


 render() {
  return (
      <div className="option-popup-container">
          <ul className="options-list-container">
              <li className="options-list">

                  <i className="glyphicon glyphicon-options-page glyphicon-blackboard"></i>
                  <p className="options-list-text">View Page as Slide Show</p>
              </li>
              <li className="options-list">
                  <i className="glyphicon glyphicon-options-page glyphicon-upload"></i>
                  <p className="options-list-text">Publish as Slide Show</p>
              </li>
              <li className="options-list">
                  <i className="glyphicon glyphicon-options-page glyphicon-export"></i>
                  <p className="options-list-text">Export as PowerPoint</p>
              </li>
              <hr className="options-break"/>
              <li className="options-list">
                  <i className="glyphicon glyphicon-options-page glyphicon-stats"></i>
                  <p className="options-list-text">Turn on Analyzer</p>
              </li>
              <hr className="options-break"/>
              <li className="options-list">
                  <i className="glyphicon glyphicon-options-page glyphicon-plus"></i>
                  <p className="options-list-text">New Collection</p>
              </li>
              <hr className="options-break last"/>
              <li className="option-list options-graph-size">
                  <div className="options-graph-size-container">
                      <div className="options-box">
                        <i className="glyphicon glyphicon-options-page glyphicon-object-align-right"></i>
                      </div>
                      <div className="options-box">
                        <i className="glyphicon glyphicon-options-page glyphicon-th"></i>
                      </div>
                      <div className="options-box">
                        <i className="glyphicon glyphicon-options-page glyphicon-th-large"></i>
                      </div>
                      <div className="options-box">
                        <i className="glyphicon glyphicon-options-page glyphicon-stop"></i>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  )
  }
}

export default OptionPopup;
