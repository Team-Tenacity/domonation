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
                <i className="fa fa-plus-circle"></i>
            </div>
        </div>
        <div className="shared-people">
            <div className="avatar">
                <img className="avatar" src="https://38.media.tumblr.com/avatar_931d37a59260_128.png" />
            </div>
            <div className="avatar">
                <img className="avatar" src="http://admin.heenatours.in/app/webroot/images/random-avatar6.jpg" />
            </div>
            <div className="avatar">
                <img className="avatar" src="https://devmounta.in/img/jeremy.png" />
            </div>
            <div className="avatar">
                <img className="avatar" src="http://www.someblogsite.com/images/avatars/lego-avatar-crop.jpg" />
            </div>
            <div className="avatar">
                <img className="avatar" src="http://ideonexus.com/wp-content/uploads/2009/12/avatar.jpg" />
            </div>
            <div className="avatar shared-count">
                <span>88</span>
            </div>
        </div>
    </div>
  )
}

export default SharedDiv;
