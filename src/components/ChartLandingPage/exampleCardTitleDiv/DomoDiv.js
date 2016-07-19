import React from 'react';

import './DomoDiv.css';

const DomoDiv = () => {
  return (
    <div className="title-domo-logo">
    <img className="title-logo" src="https://support.domo.com/public/images/logo-400.png"/>
        <div className="text-container">
            Owner
            <div className="lower-text-container">
              DomoSupport
            </div>
        </div>
    </div>
  )
}

export default DomoDiv;
