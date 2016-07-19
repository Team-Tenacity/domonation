import React from 'react';

import './SharedDiv.css'

const SharedDiv = () => {
  return (
    <div className="shared-container">
        <div className="shared-plus-container">
            <div className="shared-plus-left">
                <div className="shared-text-top">Shared</div>
                <div className="shared-text-bottom">93 people</div>
            </div>
            <div className="shared-plus-right">
                <img className="shared-plus" />
            </div>
        </div>
        <div className="shared-people">
            <div className="person"></div>
            <div className="person"></div>
            <div className="person"></div>
            <div className="person"></div>
            <div className="person"></div>
            <div className="person"></div>
        </div>
    </div>
  )
}

export default SharedDiv;
