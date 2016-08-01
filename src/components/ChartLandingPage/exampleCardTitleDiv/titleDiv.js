import React from 'react';
import SharedDiv from './SharedDiv';
import DomoDiv from './DomoDiv';
import AddCardButton from './AddCardButton';
import OptionButton from './titlePageOptionsButton';

import './titleDiv.css'


const TitleDiv = ({data}) => {
    return (
      <div className="main-title-container">
          <div className="title-divs-container-left">
            <div className="title">
                @{data.twitterHandle} Twitter Cards
            </div>
          </div>
          <div className="title-divs-container-right">
              <DomoDiv data={data} />
              <SharedDiv />
              <AddCardButton />
              <OptionButton />
          </div>
      </div>
    )
}

export default TitleDiv
