import React from 'react';
import SharedDiv from './SharedDiv';
import DomoDiv from './DomoDiv';
import AddCardButton from './AddCardButton';

import './titleDiv.css'


const TitleDiv = () => {
    return (
      <div className="main-title-container">
          <div className="title-divs-container-left">
            <div className="title">
            Example Cards
            </div>
          </div>
          <div className="title-divs-container-right">
              <DomoDiv />
              <SharedDiv />
              <AddCardButton />
              <div className="title-page-options">
                <img className="title-wrench" src="http://www.iconpng.com/png/windows-8-metro-invert/configure_alt_2.png" />
                <img className="title-chevron2" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png" />
              </div>
          </div>
      </div>
    )
}

export default TitleDiv
