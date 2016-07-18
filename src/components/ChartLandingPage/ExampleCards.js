import React from "react";

require("./ExampleCards.css");

const ExampleCard = () => {
  return (
      <div className="card-div">
          <div className="content-div">
              <div className="header-text">
                  <h1>Running Total Line</h1>
              </div>

              <div className="spacer-div"></div>

              <div className="image-div">
                  <img src="data:image/png;base64,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" />
              </div>
          </div>

              <div className="footer-div">
                  <img src="https://support.domo.com/avatar/userImage/100?key=avatars/support/A1/38D352E4BCF367C068802EC949A4A4.jpg" />
              </div>
      </div>
  )
}

export default ExampleCard;
