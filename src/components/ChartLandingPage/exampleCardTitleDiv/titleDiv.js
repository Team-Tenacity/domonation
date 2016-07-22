import React from 'react';
import SharedDiv from './SharedDiv';
import DomoDiv from './DomoDiv';
import AddCardButton from './AddCardButton';
import OptionButton from './titlePageOptionsButton';

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
              <OptionButton />
          </div>
      </div>
    )
}

export default TitleDiv
